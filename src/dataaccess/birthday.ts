import path from "path";
import { fileURLToPath } from "url";
import { readFile, writeFile } from "./fileManager.js";
import { Birthday } from "types/Birthday.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const birthdayFile = path.join(__dirname, "..", "..", "data", 'birthdays.json');

export const addBirthday = (date: Date, userId: string, username: string) => {
    const data = JSON.parse(readFile(birthdayFile) || '{}');

    if (data[userId]) {
        throw new Error(`You already have a birthday registered at ${data[userId].date}`);
    }

    data[userId] = { "date": date.toISOString(), "username": username };
    writeFile(birthdayFile, JSON.stringify(data));
};

export const removeBirthday = (user: string) => {
    const data = JSON.parse(readFile(birthdayFile) || '{}');

    if (!data[user]) {
        throw new Error("You don't have a birthday registered");
    }

    delete data[user];
    writeFile(birthdayFile, JSON.stringify(data));
}

export const getBirthday = (user: string) : Birthday | null => {
    const data = JSON.parse(readFile(birthdayFile) || '{}');
    if (!data[user]) {
        return null;
    }
    return { userId: user, date: new Date(data[user].date), username: data[user].username };
};

export const getAllBirthdays = () : Birthday[] => {
    const data = JSON.parse(readFile(birthdayFile) || '{}');

    return Object.keys(data).map(key => {
        return { userId: key, date: new Date(data[key].date), username: data[key].username };
    });
};
