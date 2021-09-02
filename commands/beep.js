module.exports = {
	name: 'beep',
	description: 'Test command',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};