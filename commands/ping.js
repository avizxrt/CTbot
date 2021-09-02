module.exports = {
	name: 'ping',
	description: 'Test command',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};