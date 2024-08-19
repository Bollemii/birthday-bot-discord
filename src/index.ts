import { Client, Events, GatewayIntentBits } from 'discord.js';

import { deployCommands } from 'deploy-commands.js';
import { commands } from 'commands/index.js';
import { token } from 'config.js';
import { startCheckBirthdayJob } from 'job/index.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Starting listener
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Registering commands description
deployCommands(commands);

// Command listener
client.on(Events.InteractionCreate, async interaction => {	
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	const command = commands.find(({ data }) => data.name === commandName);
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);

startCheckBirthdayJob(client);
