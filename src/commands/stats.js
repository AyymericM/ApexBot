const d = require('discord.js')
const axios = require('axios')
const calculateRank = require('../helpers/calculateRank')
const searchByKey = require('../helpers/searchByKey')
const config = require('../../config')

module.exports = {
	name: 'stats',
	aliases: ['s'],
	description: "Gives you your stats",
	args: true,
	guildOnly: false,
	ownerOnly: false,
	usage: '!apexbot stats [Player Name]',
	execute(client, msg, args) {
		if(args[2]) {
			axios.get(`https://public-api.tracker.gg/apex/v1/standard/profile/5/${args[2]}`, {headers: { 'TRN-Api-Key': config.api_key }})
			.then(res => {
				const player = res.data.data.metadata
				const stats = res.data.data.stats
				const rankedScore = searchByKey(stats, 'RankScore').value
				
				console.log(stats)

				const embed = new d.RichEmbed()
					.setTitle(`Stats for ${player.platformUserHandle}`)
					.setColor('#ff0000')
					.setAuthor('• ApexBot •')
					.addField("Level:", player.level, true)
					.addField("Ranked:", `${calculateRank(rankedScore)} (${rankedScore} RP)`, true)
					.setFooter("Thanks for using ApexBot. keep grinding !")

				msg.reply(embed)
			}).catch(() => {
				msg.reply(`This username doesn't exists.`)
			})
		} else {
			msg.reply('Please give your origin username (eg: `!apexbot stats NRG_aceu`)')
		}

	}
};
