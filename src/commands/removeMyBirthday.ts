import { removeBirthday } from "dataaccess/birthday.js";
import { SlashCommandBuilder } from "discord.js";
import { Command } from "types/Command.js";
import { publishBirthdaysList } from "./publishBirthdaysList.js";

export const removeMyBirthdayCommand : Command = {
    data: new SlashCommandBuilder()
        .setName("remove-my-birthday")
        .setDescription("Remove your birthday"),
    async execute(client, interaction) {
        try {
            removeBirthday(interaction.user.id);
            await interaction.reply({
                content: "Your birthday has been removed",
                ephemeral: true,
            });
            publishBirthdaysList(client, interaction.channelId);
        } catch (error: any) {
            await interaction.reply({
                content: error.message,
                ephemeral: true,
            });
        }
    },
};
