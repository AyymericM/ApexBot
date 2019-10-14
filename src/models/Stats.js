const mongoose = require('mongoose')

module.exports = class StatsModel {
    constructor() {
        this.schema = new mongoose.Schema({
            discordUser: { type: Object, default: {} },
            stats: { type: Array, default: new Array(0) }
        })
    }

    updateStats(_user, _data) {
        const Stats = mongoose.model('Stats', this.schema)
        const query = {
            "discordUser.id": _user
        }

        this.db.findOneAndUpdate(query, update, options, (error, result) => {
            if (!error) {
                if (!result) {
                    result = new Stats()
                }

                result.save(err => {
                    if (!err) {
                        return result
                    } else {
                        throw err
                    }
                })
            }
        })
    }

    getStats() {
        //TODO: correct query
        this.db.findOne({})
    }
}