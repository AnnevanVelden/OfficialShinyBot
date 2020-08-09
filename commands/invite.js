const discord = require('discord.js');
// if the command is %info give this message:

module.exports.run = async (client, message, args, prefix) => {
    return message.channel.send('Here is the invite to the bot, https://discord.com/oauth2/authorize?client_id=701853546177364028&scope=bot.\nGo to https://www.shinybot.dev if the bot is offline for the same functions.');
};

// name of the command
module.exports.help = {
    name: 'invite',
};
