const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
 
const token = 'NzU3NDkwNzExMzU1NzE5NzEx.X2hKMw.7jQFtFUzsMkKyFKSOXhh0A8qhBA';
 
const PREFIX = '!';
 
 
bot.on('ready', () => {
    console.log('Ready');
})
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
 
    switch (args[0]) { 
        case 'retrievetest':
            const Embed = new Discord.MessageEmbed()
            .setTitle("CT - Item retrieving Command")
            .setColor(0xFF0000)
            .setDescription("You have got the (TEST ITEM). Please do not resell. https://drive.google.com/file/d/1whUhTb3lEfdp2XqRVZEL7tUY9ecS2Lu5/view?usp=sharing");
 
            message.author.send(Embed);
        break;
    }
 
 
});
 
            
                        
bot.login('NzU3NDkwNzExMzU1NzE5NzEx.X2hKMw.7jQFtFUzsMkKyFKSOXhh0A8qhBA');