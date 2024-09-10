import { Command } from "types/Command.js";

import { pingCommand } from "./ping.js";
import { addBirthdayCommand } from "./addBirthday.js";
import { getMyBirthdayCommand } from "./getMyBirthday.js";
import { getBirthdaysListCommand } from "./getBirthdaysList.js";
import { removeMyBirthdayCommand } from "./removeMyBirthday.js";

export const commands: Command[] = [
    pingCommand,
    addBirthdayCommand,
    getMyBirthdayCommand,
    getBirthdaysListCommand,
    removeMyBirthdayCommand,
];
