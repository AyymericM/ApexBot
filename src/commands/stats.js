const isargsprovided = require('../helpers/isargsprovided')
const User = require('../schemas/User')
const Stats = require('../schemas/Stats')

module.exports = {
    name: 'stats',
    aliases: ['s'], // this command can also now be called by the "cmdname" command!
    description: 'Ajouter ou voir ses stats',
    guildOnly: true, // this command can now only be run inside of a server!
    ownerOnly: false, // this command can now only be run by the owner of a server!
    args: false, // you need to pass some args to this command for it to run!
    usage: '!apexbot stats [add {kills} {damage} {placement}]', // in the example, it will tell the user to input some cool text as the argument
    execute(client, msg, args) {
        if (isargsprovided(args)) {
            if (args[2] === 'add' && args.length === 6) {
                const stats = {
                    author: msg.author.id,
                    kills: args[3],
                    damage: args[4],
                    placement: args[5]
                }

                const user = {
                    id: msg.author.id,
                    username: msg.author.username,
                    discriminator: msg.author.discriminator,
                    avatar: msg.author.avatar,
                }

                User.create(user).then(val => {
                    console.log('[APEXBOT] val: ', val)
                    Stats.create(stats)
                }).catch(err => {
                    if (err.code !== 11000) {
                        console.log('[APEXBOT ERROR]', err)
                    } else {
                        Stats.create(stats)
                    }
                })
            } else {
                console.log('uknown command')
                // return uknown command
            }
        } else {
            console.log('No args provided :(');
        }
    }
}