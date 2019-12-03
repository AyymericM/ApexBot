const axios = require('axios')

module.exports = {
	name: 'rank',
	aliases: ['r'],
	description: "Gives you your stats",
	args: false,
	guildOnly: false,
	ownerOnly: false,
	usage: '!apexbot rank [Player Name]',
	execute(client, msg, args) {
		console.log(args)
		axios.get(`https://public-api.tracker.gg/apex/v1/standard/profile/5/preda_aym`, {headers: { 'TRN-Api-Key': '93c99d47-3507-4b92-a9e2-355a9da915bc' }})
		.then(res => {
			msg.reply(`Your rank is `);
		}).catch(err => {
			console.log('REQUEST FAILED');
			console.log(err)
		})

	}
};
