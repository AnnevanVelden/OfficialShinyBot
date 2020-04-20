const discord = require('discord.js');

// if the command is %bruhmoment give this message:
module.exports.run = async (bot, message, args, prefix) => {
	const fs = require('fs');

	// read the folder nammed commands
	fs.readdir('./commands/', (err, files) => {
		var jsFiles = files.filter((f) => f.split('.').pop() === 'js');

		var dump = '';
		jsFiles.forEach((f, i) => {
			f = f.substring(0, f.length - 3);

			dump += `${prefix}` + f + '\n';
		});
		return message.channel.send('```ALL COMMANDS:\n\n' + dump + '```');
	});
};

// name of the command
module.exports.help = {
	name: 'commands',
};
