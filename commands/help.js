const discord = require('discord.js');
// if the command is %info give this message:

module.exports.run = async (bot, message, args, prefix) => {
	// make a rich embed
	var botEmbed = new discord.RichEmbed()
		// set the color to yellow
		.setColor('#ffd117')
		// title of the embed
		.setTitle('ShinyBot commands')
		// a fun little thumbnail of the profile pic from the bot
		.setThumbnail(bot.user.displayAvatarURL)
		// explanation of the different commands
		.addField(prefix + 'help', 'Get some basic information of the bot')
		.addField(prefix + 'commands', 'A list of any and all possible base commands')
		.addField(prefix + 'random', 'Get a random pokémon')
		.addField(
			prefix + 'random <region>',
			'Get a random pokémon from the requested regional pokédex. The available commands are: kanto, johto, hoenn, hoenn-oras, sinnoh, sinnoh-plat, unova, unova-b2w2, kalos, alola, alola-usum and galar'
		)
		.addField(prefix + 'random <type>', 'Get a random pokémon with the type requested')
		.addField(
			prefix + 'random <region> <type>',
			'Get a random pokémon from this specific regional pokédex with the type requested'
		)
		.addField(
			prefix + 'shiny <pokémon> or ' + prefix + 'shiny <national pokédex number>',
			"Get some info relevant to shiny hunting of a specific pokémon. WARNING: IF THE MON HAS A SPACE IN THE NAME DON'T PUT IT IN THERE (for instance: Type: Null would be Type:Null). Also, Nidoran is NidoranF and NidoranM."
		)
		.addField(prefix + 'error <explanation>', 'Report an error in the bot.');
	// send the message
	message.channel.send(botEmbed);
};

// name of the command
module.exports.help = {
	name: 'help',
};
