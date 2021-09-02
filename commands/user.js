module.exports = {
	name: 'user',
	description: 'Know more about you',
	execute(message, args) {
		message.channel.send('Your username: ${message.author.username}\nYour ID: ${message.author.id}');
	},
};