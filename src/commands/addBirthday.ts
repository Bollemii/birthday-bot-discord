import { SlashCommandBuilder, time, TimestampStyles } from "discord.js";

import { addBirthday } from "dataaccess/birthday.js";

export const addBirthdayCommand = {
    data: new SlashCommandBuilder()
        .setName("add-birthday")
        .setDescription("Register your birthday")
        .addStringOption((option) =>
            option
                .setName("date")
                .setDescription("Your birthday date (format: YYYY-MM-DD)")
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const date = interaction.options.getString("date");
        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            await interaction.reply("Wrong date format. Please use YYYY-MM-DD");
            return;
        }
        try {
            const parsedDate = new Date(date);

            if (isNaN(parsedDate.getTime())) {
                throw new Error("Invalid date");
            }
            if (parsedDate.getTime() > Date.now()) {
                throw new Error("You can't register a birthday in the future");
            }

            addBirthday(
                parsedDate,
                interaction.user.id,
                interaction.user.username
            );
            await interaction.reply({
                content: `Your birthday has been registered and is ${time(
                    parsedDate,
                    TimestampStyles.LongDate
                )}`,
                ephemeral: true,
            });
        } catch (err: any) {
            await interaction.reply({ content: err.message, ephemeral: true });
        }
    },
};
