import { ChatInputCommandInteraction, Client, SlashCommandOptionsOnlyBuilder } from "discord.js";

export interface Command {
    data: SlashCommandOptionsOnlyBuilder;
    execute(client: Client, interaction: ChatInputCommandInteraction): Promise<void>;
};