import { REST, Routes } from "discord.js";

import { clientId, guildId, token } from 'config.js';
import { Command } from "types/Command.js";

export const deployCommands = async (commands: Command[]) => {
    const rest = new REST().setToken(token);
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands.map(command => command.data.toJSON()) },
        );
    } catch (error) {
        console.error(error);
    }
};