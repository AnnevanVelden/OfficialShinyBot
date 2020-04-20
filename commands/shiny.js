const discord = require('discord.js');
const mysql = require('mysql');
const botConfig = require('../botconfig.json');

// if the command is shiny
module.exports.run = async (bot, message, args, prefix) => {
	// make a connection to the database with all the pokemon data in it
	var con = mysql.createConnection({
		host: botConfig.host,
		user: botConfig.user,
		password: botConfig.password,
		database: botConfig.database,
	});

	// split the message where there is a space
	var arg = message.content.slice(`${prefix}shiny`.length).split(' ');

	// the second word in the message is the pokemon
	var pokemonName = arg[1];

	// if there is a pokemon name
	if (pokemonName) {
		// do a quick query, select everything from the table named pokemon where the name is the same as
		// the name in the message
		con.query(`SELECT * FROM pokemon WHERE name = ?`, [pokemonName], function (err, rows) {
			// if there is a error, throw it my way
			if (err) {
				throw err;
			}
			// if the result of the query is bigger than 0
			if (rows.length > 0) {
				lookupName(rows);
			} else {
				// if the second word isn't a pokemon name check if it is a number and do the next query

				// do a quick query, select everything from the table named pokemon where the id is the same as the
				// number
				con.query(`SELECT * FROM pokemon WHERE id = ?`, [pokemonName], function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					if (rows.length > 0) {
						lookupName(rows);
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
		var serebiiLowercase = rows[0].name.toLowerCase();
		// put the lowercase value behind an url to make a link
		var serebiiLink = 'https://www.serebii.net/pokemon/' + serebiiLowercase;

		// if the id is bigger than or equal to 810 or equal to the number below run this part of code
		// this is hella long but the pictures of these pokemon will be a better quality bc of the
		// link in serebii
		if (rows[0].galar == 1) {
			// put the id of the pokemon behind this url to generate the link to the picture
			var normalImageLink = 'https://www.serebii.net/swordshield/pokemon/' + rows[0].id + '.png';
			// same here but this is the picture for the shiny version
			var shinyImageLink = 'https://www.serebii.net/Shiny/SWSH/' + rows[0].id + '.png';

			// if the id is lower or equal to 9 put two 0's before it -> 1 will turn into 001
			if (rows[0].id <= 9) {
				var idLowest = '00' + rows[0].id;
				// generate these links instead (this will override the value it was givven above)
				var normalImageLink = 'https://www.serebii.net/swordshield/pokemon/' + idLowest + '.png';
				var shinyImageLink = 'https://www.serebii.net/Shiny/SWSH/' + idLowest + '.png';
				// if the id is higher than 9 and lower than 100 put one 0 before it -> 50 becomes 050
			} else if (rows[0].id > 9 && rows[0].id < 100) {
				var idLow = '0' + rows[0].id;
				// generate the links again, this will override the values above
				var normalImageLink = 'https://www.serebii.net/swordshield/pokemon/' + idLow + '.png';
				var shinyImageLink = 'https://www.serebii.net/Shiny/SWSH/' + idLow + '.png';
			}
		} else {
			// this is the same as above but for the left over id numbers, these id values will link to a
			// lower value image on the serebii site
			var normalImageLink = 'https://www.serebii.net/sunmoon/pokemon/' + rows[0].id + '.png';
			var shinyImageLink = 'https://www.serebii.net/Shiny/SM/' + rows[0].id + '.png';

			if (rows[0].id <= 9) {
				var idLowest = '00' + rows[0].id;
				var normalImageLink = 'https://www.serebii.net/sunmoon/pokemon/' + idLowest + '.png';
				var shinyImageLink = 'https://www.serebii.net/Shiny/SM/' + idLowest + '.png';
			} else if (rows[0].id > 9 && rows[0].id < 100) {
				var idLow = '0' + rows[0].id;
				var normalImageLink = 'https://www.serebii.net/sunmoon/pokemon/' + idLow + '.png';
				var shinyImageLink = 'https://www.serebii.net/Shiny/SM/' + idLow + '.png';
			}
		}

		// generate the first rich embed
		const botEmbed1 = new discord.RichEmbed()
			// set the color to yellow
			.setColor('#ffd117')
			// the title of the message is the name of the pokemon, this info is from the database
			.setTitle(rows[0].name)
			// the egg cycle is put here, also info from the database
			.addField('Egg cycle', rows[0].cycle)
			// give the generated link from waaay above in the code
			.addField('Serebii link', serebiiLink)
			// if error
			.addField(
				`In case of an error: ${prefix}error`,
				`If there is an error please use this command and explain what is wrong. Example: ${prefix}error <explanation>`
			);
		// send the message
		message.channel.send(botEmbed1);

		// make a second rich embed
		const botEmbed2 = new discord.RichEmbed()
			// set the color to yellow
			.setColor('#ffd117')
			// the title is Normal <pokemon name>
			.setTitle('Normal ' + rows[0].name)
			// give the link we generated for the normal image
			.setImage(normalImageLink);
		// send the message
		message.channel.send(botEmbed2);

		// make a third embed
		const botEmbed3 = new discord.RichEmbed()
			// set the color to yellow
			.setColor('#ffd117')
			// the title is Shiny <pokemon name>
			.setTitle('Shiny ' + rows[0].name)
			// link to the generated shiny image
			.setImage(shinyImageLink);
		// send the message
		message.channel.send(botEmbed3);
	}
};

// the command is shiny
module.exports.help = {
	name: 'shiny',
};
