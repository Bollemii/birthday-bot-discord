import path from "path";
import { fileURLToPath } from "url";
import { readFile, writeFile } from "./fileManager.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const birthdayFile = path.join(__dirname, "..", "..", "data", 'lastBirthdaysListMessage.txt');

export const getLastBirthdayListMessage = () => {
    return readFile(birthdayFile);
};

export const saveLastBirthdayListMessage = (message: string) => {
    return writeFile(birthdayFile, message);
};
