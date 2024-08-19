import { SlashCommandBuilder, time, TimestampStyles } from "discord.js";

import { getAllBirthdays } from "dataaccess/birthday.js";

export const getBirthdaysListCommand = {
    data: new SlashCommandBuilder()
        .setName('get-birthdays-list')
        .setDescription('Get the list of birthdays'),
    async execute(interaction: any) {
        const birthdays = getAllBirthdays();
        if (birthdays.length === 0) {
            await interaction.reply("No birthdays registered");
            return;
        }
        let message = "# Birthdays:\n";
        birthdays.forEach(birthday => {
            message += `  - [${birthday.username}](<https://discord.com/users/${birthday.userId}>) - ${time(birthday.date, TimestampStyles.LongDate)}\n`;
        });
        await interaction.reply(message);
    }
};