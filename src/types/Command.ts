import { SlashCommandOptionsOnlyBuilder } from "discord.js";

export interface Command {
    data: SlashCommandOptionsOnlyBuilder;
    execute(interaction: any): Promise<void>;
};