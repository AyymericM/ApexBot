const fs = require('fs');
const Mongod = require('mongod');
const mongoose = require('mongoose');

module.exports = class Database {
    constructor() {
        fs.mkdir('./db-files', () => {
            this.server = new Mongod({
                port: 27017,
                dbpath: './db-files'
            })
        })
        
        this.state = {
            running: false
        }

        server.open((err) => {
            if (err === null) {
                this.state.running = true
            } else {
                this.state.running = false
            }
        })
    }
}