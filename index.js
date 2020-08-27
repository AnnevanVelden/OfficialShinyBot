const discord = require("discord.js");
const botConfig = require('./botconfig.json');
const fs = require('fs');
const client = new discord.Client({
    ws: {
        intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_WEBHOOKS"]
    }
});

client.commands = new discord.Collection();

// read the folder nammed commands
fs.readdir('./commands/', (err, files) => {
    // if there is an error throw it my way
    if (err) {
        throw err;
    }

    // get all the command files in the folder named commands
    var jsFiles = files.filter((f) => f.split('.').pop() === 'js');

    // if the number of files in the folder is less or equal to 0
    // say that there are no files in the folder
    if (jsFiles.length <= 0) {
        console.log('No file found');
        return;
    }

    // for each file in the command folder give a quick console log
    // that says the command is loaded and then actually load it
    jsFiles.forEach((f, i) => {
        var fileGet = require(`./commands/${f}`);

        console.log(`${f} is loaded`);

        client.commands.set(fileGet.help.name, fileGet);
    });
});

// if the bot is ready say it is online and fill in the little playing
// thingy you have on discord when you are playing an game
client.on('ready', async () => {
    console.log(`${client.user.username} is online`);

    client.user.setActivity(`${botConfig.prefix}help`, { type: 'LISTENING' });
});

// if a message is sent
client.on('message', async message => {
    // if bot sends a message return
    if (message.author.bot) return;

    // if the message is in the dm channel return nothing bc i don't want that
    if (message.channel.type === 'dm') return;

    // get the prefix for the bot (it's % btw)
    var prefix = botConfig.prefix;

    // split the message where it has a space
    var messageArray = message.content.split(' ');

    // get the first word in the message that was split in the command above
    var command = messageArray[0];

    // if there is a space, this one will check it and contains the argument after the space
    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    // if there is a command send it to the commands folder
    if (command.charAt(0) === prefix) {
        if (commands) {
            commands.run(client, message, arguments, prefix, botConfig);
        } else {
            return null;
        }
    }
});

client.login(botConfig.token);