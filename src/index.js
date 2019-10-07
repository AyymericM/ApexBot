const Discord = require('discord.js')
const fs = require('fs')
const config = require('../config.js')

class ApexBot {
	constructor() {
		this.client = new Discord.Client()
		this.client.commands = new Discord.Collection()
		this.client.login(config.token)

		// command handler
		this.commandFiles = fs
			.readdirSync('./src/commands/')
			.filter(file => file.endsWith('.js'))

		for (const file of this.commandFiles) {
			const command = require(`./commands/${file}`)
			this.client.commands.set(command.name, command)
		}

		this.registerEvents()
	}

	registerEvents() {
		this.client.on('ready', () => console.log(`${config.name} is ready!`))

		this.client.on('message', msg => {
  			if (msg.author.bot) return // if a bot sends a message, ignore it

  			if (msg.content.startsWith(config.prefix)) {
    			const args = msg.content.slice(config.prefix.length).split(/ +/)
    			const commandName = args.shift().toLowerCase()

			const command =
				this.client.commands.get(commandName) ||
				this.client.commands.find(
					cmd => cmd.aliases & cmd.aliases.includes(commandName)
				)
				
				if (!command) return

				if (command.permissions) {
					let missingPermissions = []

					for (let i = 0; i < command.permissions.length; i++) {
						if (!msg.member.hasPermission(command.permissions[i])) {
							missingPermissions.push(command.permissions[i])
						}
					}

					if (missingPermissions.length > 0) {
						return msg.reply("Sorry, but you don't have permission to run that command!")
					}
				}

    			// if the command has an ownerOnly property and user is not the server's owner
				if (command.ownerOnly && msg.author.id !== msg.guild.owner.id) {
					return msg.reply("Sorry, but you don't have permission to run that command!")
				}

				// if the command has a guildOnly property and the message is not in a guild's text channel
				if (command.guildOnly && msg.channel.type !== 'text') {
					return msg.reply("I can't execute that command inside DMs!")
				}

				if (command.args && !args.length) {
					// if the command has an args property, but none are passed...
					let reply = "You didn't provide any arguments!"

					if (command.usage) {
						// if the command has a usage property...
						reply += `\nThe proper usage would be: \`${prefix}${command.name} ${
						command.usage
						}\``
					}

					return msg.reply(reply)
				}

				try {
					command.execute(client, msg, args) // try to execute the command
				} catch (err) {
					console.log(err)
					msg.reply('There was an error trying to execute that command!')
				}
			}
		})
	}
}

const bot = new ApexBot()