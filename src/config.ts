import { config } from 'dotenv';
config();

export const token = process.env.BOT_TOKEN || "";
if (!token) throw new Error('No token provided');
export const clientId = process.env.CLIENT_ID || "";
if (!clientId) throw new Error('No client ID provided');
export const guildId = process.env.GUILD_ID || "";
if (!guildId) throw new Error('No guild ID provided');
export const channelId = process.env.CHANNEL_ID || "";
if (!channelId) throw new Error('No channel ID provided');