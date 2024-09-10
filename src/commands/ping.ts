import { SlashCommandBuilder } from "discord.js";
import { Command } from "types/Command.js";

export const pingCommand : Command = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute(_, interaction) {
        await interaction.reply({ content: "Pong!", ephemeral: true });
    },
};
