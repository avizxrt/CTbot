module.exports = {
	name: 'server',
	description: 'Know more about the server youre in',
	execute(message, args) {
		message.channel.send('Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nInvite link: https://discord.gg/SVcb3KN');
	},
};