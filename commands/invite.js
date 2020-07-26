const discord = require('discord.js');
// if the command is %info give this message:

module.exports.run = async (bot, message, args, prefix) => {
	return message.channel.send('Go to https://www.shinybot.dev, there you can find an invite link to the bot.');
};

// name of the command
module.exports.help = {
	name: 'invite',
};
