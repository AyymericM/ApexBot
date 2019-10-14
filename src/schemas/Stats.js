const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apexbot', { useUnifiedTopology: true });

const schema = new mongoose.Schema({
    author: Number,
    kills: String,
    damage: String,
    placement: String
})

module.exports = mongoose.model('Stats', schema)