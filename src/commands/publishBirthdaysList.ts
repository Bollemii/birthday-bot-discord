import { Client, time, TimestampStyles } from "discord.js";

import { getAllBirthdays } from "dataaccess/birthday.js";
import { getLastBirthdayListMessage, saveLastBirthdayListMessage } from "dataaccess/lastBirthdayListMessage.js";

export function publishBirthdaysList(client: Client, channelId: string) {
    const channel = client.channels.cache.get(channelId);
    if (!channel || !channel.isTextBased()) {
        return;
    }

    const lastBirthdaysListMessage = getLastBirthdayListMessage();
    if (lastBirthdaysListMessage) {
        channel.messages.fetch(lastBirthdaysListMessage).then((message) => {
            message.delete();
        });
    }
    const birthdays = getAllBirthdays();
    let message = "# Birthdays:\n";
    if (birthdays.length === 0) {
        message += "*No birthdays registered*";
    } else {
        birthdays.forEach((birthday) => {
            message += `  - [${birthday.username}](<https://discord.com/users/${
                birthday.userId
            }>) - ${time(birthday.date, TimestampStyles.LongDate)}\n`;
        });
    }
    channel.send(message).then((sendedMessage) => {
        saveLastBirthdayListMessage(sendedMessage.id);
    });
};
