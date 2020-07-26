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
			'Get a random pokémon from the requested regional pokédex. The available commands are: kanto, johto, hoenn, hoenn-oras, sinnoh, sinnoh-plat, unova, unova-b2w2, kalos, alola, alola-usum, galar and galar-dlc'
		)
		.addField(prefix + 'random <type>', 'Get a random pokémon with the type requested')
		.addField(
			prefix + 'random <region> <type>',
			'Get a random pokémon from this specific regional pokédex with the type requested'
		)
		.addField(
			prefix + 'shiny <pokémon> or ' + prefix + 'shiny <national pokédex number>',
			"Get some info relevant to shiny hunting of a specific pokémon. WARNING: IF THE MON HAS A SPACE IN THE NAME DON'T PUT IT IN THERE (for instance: Type Null would be TypeNull). Also, Nidoran is NidoranF and NidoranM."
		)
		.addField(
			prefix + 'mega <pokémon> or ' + prefix + 'mega <national pokédex number>',
			"Get the mega version of a pokémon if it exists. WARNING: CHARIZARD AND MEWTWO HAVE AN X AND Y VERSION SO FOR THOSE TWO YOU WILL HAVE TO PUT X OR Y BEHIND THE NAME. (For example: mewtwoy \nFor a random mega use -mega random)"
		)
		.addField(prefix + 'invite', 'Get an invite link so you can invite the bot to your own server.')
		.addField(prefix + 'error <explanation>', 'Report an error in the bot.')
		.addField('website', 'The ShinyBot now also has a website. Go to https://www.shinybot.dev to see it.');
	// send the message
	message.channel.send(botEmbed);
};

// name of the command
module.exports.help = {
	name: 'help',
};
