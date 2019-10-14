const isargsprovided = require('../helpers/isargsprovided')
const Stats = require('../models/Stats')

module.exports = {
    name: 'stats',
    aliases: ['s'], // this command can also now be called by the "cmdname" command!
    description: 'Ajouter ou voir ses stats',
    guildOnly: true, // this command can now only be run inside of a server!
    ownerOnly: false, // this command can now only be run by the owner of a server!
    args: false, // you need to pass some args to this command for it to run!
    usage: '!apexbot stats [add {kills} {damage} {placement}]', // in the example, it will tell the user to input some cool text as the argument
    execute(client, msg, args) {
        console.log(msg)
        if (isargsprovided(args)) {
            if (args[2] === 'add' && args.length === 6) {
                const stats = {
                    kills: args[3],
                    damage: args[4],
                    placement: args[5]
                }
            } else {
                console.log('uknown command')
                // return uknown command
            }
        } else {
            console.log('No args provided :(');
        }
    }
}