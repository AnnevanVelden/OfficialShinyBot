const discord = require('discord.js');
const botConfig = require('../botconfig.json');
const mysql = require('mysql');

// if the command is %info give this message:

module.exports.run = async (bot, message, args, prefix) => {
    var con = mysql.createConnection({
        host: botConfig.host,
        user: botConfig.user,
        password: botConfig.password,
        database: botConfig.database,
    });

    tag = message.member.user.tag;
    content = message.content.slice(7);

    goose = bot.users.cache.get(botConfig.goose);

    let d = new Date();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    var date = d.toLocaleTimeString('nl-NL', options);

    con.query(`INSERT INTO errorlog (tag,date,message) VALUES (?,?,?)`, [tag, date, content]);
    goose.send(
        `There is a new error reported to the ShinyBot. this is the error message: \n${content} \nFor more information check the database.`
    );
    return message.channel.send('The error is noted, thanks for reporting it.');
};

// name of the command
module.exports.help = {
    name: 'error',
};
