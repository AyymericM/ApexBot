module.exports = {
	name: 'ping',
	aliases: ['p'],
	description: "Calculate the bot's heartbeat 🏓",
	args: false,
	guildOnly: false,
	ownerOnly: false,
	usage: '!apexbot ping',
	execute(client, msg, args) {
		const heartbeat = `${Math.round(
		client.pings.reduce((a, b) => {
			return a + b;
		}) / client.pings.length
		)}ms`;

		msg.reply(`pong! 🏓 - Heartbeat of ${heartbeat}`);
	}
};
