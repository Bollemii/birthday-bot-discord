import { Client, userMention } from "discord.js";
import cron from "node-cron";

import { channelId } from "config.js";
import { getAllBirthdays } from "dataaccess/birthday.js";

export const startCheckBirthdayJob = (client: Client) => {
    // This job will run every day at 9:00 AM
    const job = cron.schedule('0 9 * * *', async () => {
        await checkBirthday(client);
    });
    job.start();
};

export const checkBirthday = async (client: Client) => {
    const now = new Date();
    const birthdays = getAllBirthdays();

    const todayBirthdays = birthdays.filter(birthday => {
        return birthday.date.getDate() === now.getDate() && birthday.date.getMonth() === now.getMonth();
    });

    if (todayBirthdays.length === 0) {
        return;
    }

    todayBirthdays.forEach(birthday => {
        const channel = client.channels.cache.get(channelId)
        if (!channel) {
            console.error('Channel not found');
            return;
        }
        // @ts-ignore
        channel.send(`Today is ${userMention(birthday.userId)}'s birthday!`);
    });
};