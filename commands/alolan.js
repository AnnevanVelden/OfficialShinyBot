const discord = require('discord.js');
const mysql = require('mysql');
const botConfig = require('../botconfig.json');

// if the command is -alolan
module.exports.run = async (client, message, args, prefix) => {
    // make a connection to the database with all the pokemon data in it
    var con = mysql.createConnection({
        host: botConfig.host,
        user: botConfig.user,
        password: botConfig.password,
        database: botConfig.database,
    });

    // split the message where there is a space
    var arg = message.content.slice(`${prefix}alolan`.length).split(' ');

    // the second word in the message is the pokemon
    var pokemonName = arg[1];


    if (pokemonName === 'random') {
        // if the second word isn't a pokemon name check if it is a number and do the next query

        // do a quick query, select everything from the table named pokemon where the id is the same as the
        // number
        con.query(`SELECT * FROM pokemon WHERE alolan = ?`, [1], function (err, rows) {
            // if there is a error, throw it my way
            if (err) {
                throw err;
            }

            var pokemon = rows[Math.floor(Math.random() * rows.length)];

            lookupName(pokemon);

        });
    }else {
        // do a quick query, select everything from the table named pokemon where the name is the same as
        // the name in the message
        con.query(`SELECT * FROM pokemon WHERE name = ? AND alolan = ?`, [pokemonName, 1], function (err, rows) {
            // if there is a error, throw it my way
            if (err) {
                throw err;
            }
            // if the result of the query is bigger than 0
            if (rows.length > 0) {
                lookupName(rows[0]);
            } else {
                // if the second word isn't a pokemon name check if it is a number and do the next query

                // do a quick query, select everything from the table named pokemon where the id is the same as the
                // number
                con.query(`SELECT * FROM pokemon WHERE dex = ? AND alolan = ?`, [pokemonName, 1], function (err, rows) {
                    // if there is a error, throw it my way
                    if (err) {
                        throw err;
                    }

                    if (rows.length > 0) {
                        lookupName(rows[0]);
                    } else {
                        // the generated number does not match the database so no pokemon could be found
                        return message.channel.send('No pokémon found.');
                    }
                });
            }
        });
    }

    function lookupName(rows) {
        // select the name in the table and make the whole string lowercase
        var serebiiLowercase = rows.name.toLowerCase();
        // put the lowercase value behind an url to make a link
        var serebiiLink = 'https://www.serebii.net/pokemon/' + serebiiLowercase;

        var bulbaLink = 'https://bulbapedia.bulbagarden.net/wiki/' + rows.name + '_(Pok%C3%A9mon)';


        var shinyImageLink = 'https://shinybot.dev/public/sprites/shiny/' + rows.dex + '_alolan.gif';
        var normalImageLink = 'https://shinybot.dev/public/sprites/regular/' + rows.dex + '_alolan.gif';


        var type1 = rows.alolan_type1;
        var type2 = rows.alolan_type2;

        if (type1 === type2){
            var types = type1;
        } else {
            var types = type1 + '/' + type2;
        }

        // generate the first rich embed
        const botEmbed1 = new discord.MessageEmbed()
            // set the color to yellow
            .setColor('#ffd117')
            // the title of the message is the name of the pokemon, this info is from the database
            .addField('website', 'https://www.shinybot.dev')
            .addField('National dex number', rows.dex)
            .setTitle('Alolan ' + rows.name)
            // the egg cycle is put here, also info from the database
            .addField('Egg cycle', rows.cycle)
            // give the generated link from waaay above in the code
            .addField('Serebii link', serebiiLink)
            .addField('Bulbapedia link', bulbaLink)
            // if error
            .addField(
                `In case of an error: ${prefix}error`,
                `If there is an error please use this command and explain what is wrong. Example: ${prefix}error <explanation>`
            )
            .addField(
                `Image credit:`,
                `https://www.pkparaiso.com/, https://twitter.com/tilabletoast and https://projectpokemon.org/`
            )
            .setFooter('Made by Goose, also know as GooseIsLord. You can find me almost everywhere with those aliases.');
        // send the message
        message.channel.send(botEmbed1);

        // make a second rich embed
        const botEmbed2 = new discord.MessageEmbed()
            // set the color to yellow
            .setColor('#ffd117')
            // the title is Normal <pokemon name>
            .setTitle('Normal Alolan ' + rows.name)
            .addField('Type', types)
            // give the link we generated for the normal image
            .setImage(normalImageLink);
        // send the message
        message.channel.send(botEmbed2);

        // make a third embed
        const botEmbed3 = new discord.MessageEmbed()
            // set the color to yellow
            .setColor('#ffd117')
            // the title is Shiny <pokemon name>
            .setTitle('Shiny Alolan ' + rows.name)
            .addField('Type', types)
            // link to the generated shiny image
            .setImage(shinyImageLink);
        // send the message
        message.channel.send(botEmbed3);
    }
};

// the command is random
module.exports.help = {
    name: 'alolan',
};
