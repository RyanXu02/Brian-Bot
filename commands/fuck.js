const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fuck me brian')
		.setDescription('fucks user'),
	async execute(interaction) {
		await interaction.reply('im gonna fuck you daddy');
	},
};