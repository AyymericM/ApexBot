const fs = require('fs')
const Mongod = require('mongod')
const path = require('path')

module.exports = class Database {
    constructor() {
        const dbpath = path.join(__dirname, '..', '..', 'db-data')

        this.state = {
            running: false
        }
    
        fs.mkdir(dbpath, () => {
            this.server = new Mongod({
                port: 27017,
                dbpath: dbpath
            })

            this.server.open((err) => {
                if (err === null) {
                    console.log('MongoDB Running !')
                    this.state.running = true
                } else {
                    console.log('[ERR] Failed to start MongoDB server')
                    console.log(err)
                    this.state.running = false
                }
            })
        })
    }
}