const discord = require('discord.js');
const botConfig = require('../botconfig.json');

// if the command is -help give this message:
module.exports.run = async (client, message, args, prefix) => {
    var botEmbed = new discord.MessageEmbed()
        // set the color to yellow
        .setColor('#ffd117')
        // title of the embed
        .setTitle('ShinyBot commands')
        // a fun little thumbnail of the profile pic from the bot
        .setThumbnail('https://shinybot.dev/public/assets/icon.png')
        // explanation of the different commands
        .addField(
            prefix + 'shiny <pokémon> or ' + prefix + 'shiny <national pokédex number>',
            "Get some info relevant to shiny hunting of a specific pokémon. WARNING: IF THE MON HAS A SPACE IN THE NAME DON'T PUT IT IN THERE (for instance: Type Null would be TypeNull). \nAlso, Nidoran is NidoranF and NidoranM and Urshifu is UrshifuRS or UrshifuSS."
        )
        .addField('\u200B', '\u200B')
        .addField(prefix + 'random', 'Get a random pokémon')
        .addField(
            prefix + 'random <region>',
            'Get a random pokémon from the requested regional pokédex. The available commands are: kanto, johto, hoenn, hoenn-oras, sinnoh, sinnoh-plat, unova, unova-b2w2, kalos, alola, alola-usum, galar and galar-dlc'
        )
        .addField(prefix + 'random <type>', 'Get a random pokémon with the type requested')
        .addField(prefix + 'random <region> <type>', 'Get a random pokémon from this specific regional pokédex with the type requested')
        .addField('\u200B', '\u200B')
        .addField(
            prefix + 'mega random, ' + prefix + 'mega <pokémon> or ' + prefix + 'mega <national pokédex number>',
            "Get the mega version of a pokémon if it exists. WARNING: CHARIZARD AND MEWTWO HAVE AN X AND Y VERSION SO FOR THOSE TWO YOU WILL HAVE TO PUT X OR Y BEHIND THE NAME. (For example: MewtwoY or CharizardY). \nFor a random mega use -mega random"
        )
        .addField(
            prefix + 'galarian random, ' + prefix + 'galarian <pokémon> or ' + prefix + 'galarian <national pokédex number>',
            "Get the Galarian version of a pokémon if it exists."
        )
        .addField(
            prefix + 'alolan random, ' + prefix + 'alolan <pokémon> or ' + prefix + 'alolan <national pokédex number>',
            "Get the Alolan version of a pokémon if it exists."
        )
        .addField(
            prefix + 'gigamax random, ' + prefix + 'gigamax <pokémon> or ' + prefix + 'gigamax <national pokédex number>',
            "Get the gigantamax version of a pokémon if it exists. WARNING: URSHIFU HAS TWO DIFFERENT FORMS SO FORE THOSE YOU WILL HAVE TO PUT IN SS OR SR BEHIND THE NAME. (For example UrshifuRS or UrshifuSS)."
        )
        .addField('\u200B', '\u200B')
        .addField(prefix + 'invite', 'Get an invite link so you can invite the bot to your own server.')
        .addField('website', 'The ShinyBot now also has a website. Go to https://www.shinybot.dev to see it.');
    return message.channel.send(botEmbed);
};

// name of the command
module.exports.help = {
    name: 'help',
};