import { removeBirthday } from "dataaccess/birthday.js";
import { SlashCommandBuilder } from "discord.js";

export const removeMyBirthdayCommand = {
    data: new SlashCommandBuilder()
        .setName("remove-my-birthday")
        .setDescription("Remove your birthday"),
    async execute(interaction: any) {
        try {
            removeBirthday(interaction.user.id);
            await interaction.reply({
                content: "Your birthday has been removed",
                ephemeral: true,
            });
        } catch (error: any) {
            await interaction.reply({
                content: error.message,
                ephemeral: true,
            });
        }
    },
};
