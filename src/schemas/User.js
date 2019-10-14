const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apexbot', { useUnifiedTopology: true });

const schema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    username: String,
    discriminator: Number,
    avatar: String
})

module.exports = mongoose.model('User', schema)