const isargsprovided = require('../helpers/isargsprovided')

module.exports = {
    name: 'simu',
    aliases: ['s'], // this command can also now be called by the "cmdname" command!
    description: 'Démarrer une nouvelle simulation',
    guildOnly: true, // this command can now only be run inside of a server!
    ownerOnly: false, // this command can now only be run by the owner of a server!
    args: true, // you need to pass some args to this command for it to run!
    usage: '!apexbot simu [start, end]', // in the example, it will tell the user to input some cool text as the argument
    execute(client, msg, args) {
        if (isargsprovided(args)) {
            console.log('Args provided !');
            console.log(args)
        } else {
            console.log('No args provided :(');
            console.log(args)
        }
    }
}