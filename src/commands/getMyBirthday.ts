import { SlashCommandBuilder, time, TimestampStyles } from "discord.js";

import { getBirthday } from "dataaccess/birthday.js";

export const getMyBirthdayCommand = {
    data: new SlashCommandBuilder()
        .setName('get-my-birthday')
        .setDescription('Get your birthday'),
    async execute(interaction: any) {
        
        const birthday = getBirthday(interaction.user.id);
        if (!birthday) {
            await interaction.reply("You don't have a birthday registered");
            return;
        }
        await interaction.reply(`Your birthday is ${time(birthday.date, TimestampStyles.LongDate)}`);
    }
};