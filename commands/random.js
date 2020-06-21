const discord = require('discord.js');
const mysql = require('mysql');
const botConfig = require('../botconfig.json');

// if the command is random
module.exports.run = async (bot, message, args, prefix) => {
	// make a connection to the database with all the pokemon data in it
	var con = mysql.createConnection({
		host: botConfig.host,
		user: botConfig.user,
		password: botConfig.password,
		database: botConfig.database,
	});

	// split the message where there is a space
	var arg = message.content.slice(`${prefix}random`.length).split(' ');

	var argument = arg[1];
	var type = arg[2];

	if (arg.length == 3) {
		switch (argument) {
			case 'kanto':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE kanto = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE kanto = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'johto':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE johto = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE johto = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'hoenn':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE hoenn = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE hoenn = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'hoenn-oras':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE hoenoras = ? AND type1 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE hoenoras = ? AND type2 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'sinnoh':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE sinnoh = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE sinnoh = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'sinnoh-plat':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE sinnoplat = ? AND type1 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE sinnoplat = ? AND type2 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'unova':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE unova = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE unova = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'unova-b2w2':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE unovab2w2 = ? AND type1 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE unovab2w2 = ? AND type2 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'kalos':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE kalos = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE kalos = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'alola':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE alola = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE alola = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'alola-usum':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE alolausum = ? AND type1 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE alolausum = ? AND type2 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'galar':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE galar = ? AND type1 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE galar = ? AND type2 = ?`, [1, type], function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
			case 'galar-dlc':
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE galardlc = ? AND type1 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE galardlc = ? AND type2 = ?`, [1, type], function (
						err,
						rows
					) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
				break;
		}
	} else if (arg.length == 2) {
		switch (argument) {
			case 'kanto':
				con.query(`SELECT * FROM pokemon WHERE kanto = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'johto':
				con.query(`SELECT * FROM pokemon WHERE johto = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'hoenn':
				con.query(`SELECT * FROM pokemon WHERE hoenn = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'hoenn-oras':
				con.query(`SELECT * FROM pokemon WHERE hoennoras = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'sinnoh':
				con.query(`SELECT * FROM pokemon WHERE sinnoh = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'sinnoh-plat':
				con.query(`SELECT * FROM pokemon WHERE sinnohplat = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'unova':
				con.query(`SELECT * FROM pokemon WHERE unova = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'unova-b2w2':
				con.query(`SELECT * FROM pokemon WHERE unovab2w2 = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'kalos':
				con.query(`SELECT * FROM pokemon WHERE kalos = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'alola':
				con.query(`SELECT * FROM pokemon WHERE alola = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'alola-usum':
				con.query(`SELECT * FROM pokemon WHERE alolausum = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'galar':
				con.query(`SELECT * FROM pokemon WHERE galar = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			case 'galar-dlc':
				con.query(`SELECT * FROM pokemon WHERE galardlc = ?`, 1, function (err, rows) {
					// if there is a error, throw it my way
					if (err) {
						throw err;
					}

					var pokemon = rows[Math.floor(Math.random() * rows.length)];
					var pokemonid = pokemon.id;

					lookUp(pokemonid);
				});
				break;
			default:
				var rand = Math.round(Math.random());
				if (rand == 0) {
					con.query(`SELECT * FROM pokemon WHERE type1 = ?`, argument, function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				} else if (rand == 1) {
					con.query(`SELECT * FROM pokemon WHERE type2 = ?`, argument, function (err, rows) {
						// if there is a error, throw it my way
						if (err) {
							throw err;
						}
						var pokemon = rows[Math.floor(Math.random() * rows.length)];
						var pokemonid = pokemon.id;

						lookUp(pokemonid);
					});
				}
		}
	} else {
		// generate a random number between 0 and 891 (so 1 to 890 can be picked)
		var pokemonid = Math.floor(Math.random() * 891);

		lookUp(pokemonid);
	}

	function lookUp(pokemonid) {
		// do a quick query, select everything from the table named pokemon where the id is the same as the random
		// number that was just generated above
		con.query(`SELECT * FROM pokemon WHERE id = ?`, [pokemonid], function (err, rows) {
			// if there is a error, throw it my way
			if (err) {
				throw err;
			}
			// if the result of the query is bigger than 0
			if (rows.length > 0) {
				// select the name in the table and make the whole string lowercase
				var serebiiLowercase = rows[0].name.toLowerCase();
				// put the lowercase value behind an url to make a link
				var serebiiLink = 'https://www.serebii.net/pokemon/' + serebiiLowercase;


				var shinyImageLink = 'http://www.anneinthemaking.nl/sprites/shiny/' + rows[0].id + '.gif';
				var normalImageLink = 'http://www.anneinthemaking.nl/sprites/regular/' + rows[0].id + '.gif';


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
					)
					.addField(
						`Image credit:`,
						`https://www.pkparaiso.com/, https://twitter.com/tilabletoast and https://projectpokemon.org/`
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
			} else {
				// the generated number does not match the database so no pokemon could be found
				return message.channel.send();
			}
		});
	}
};

// the command is random
module.exports.help = {
	name: 'random',
};
