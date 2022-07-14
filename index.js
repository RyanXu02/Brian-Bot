const { Client, Intents } = require('discord.js');
const { token, guildID } = require('./config.json');


const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

const guild = client.guilds.cache.get(guildID)



client.on("ready", () => {
	//startup
	client.user.setPresence({
		status: "idle",
		activities: [{
			name: 'your dad',
			type: 'WATCHING'
		}]
	});
	console.log(`Logged in as ${client.user.tag}`);
	//startup

	let commands
	if(guild){
		commands = guild.commands
	} else{
		commands = client.application?.commands
	}
	commands?.create({
		name: 'fuckme',
		description: ' fucks user',
	})

})

client.on("messageCreate", (msg) => {
	if (msg.content === "fuck me brian") {
		msg.reply("i am going to fuck you daddy");
	}
	else if (msg.content === "hi brian") {
		msg.reply("ur a bitch");
	}
})

client.on("interactionCreate", async (interaction) =>{
	if (!interaction.isCommand()){
		return
	}

	const { commandName, options } = interaction

	if (commandName === 'fuckme'){
		interaction.reply({
			content: 'its just you and me, time for a fucking ;)',
			ephemeral: true,
		})
	}
})

client.login(token)