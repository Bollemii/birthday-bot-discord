# Birthday discord bot

This is a discord bot that will send a message to a channel when it is someone's birthday.

## Usage
To use this bot, the members of the server can use the following commands:
- `/add-birthday <date>`: Adds the birthday of the user. The date must be in the format `yyyy-dd-mm`.
- `/remove-my-birthday`: Removes the birthday of the user.
- `/get-my-birthday`: Gets the birthday of the user.
- `/get-birthdays-list`: Gets the list of birthdays of the server members.

## Installation
To install the bot, you need to have Node.js installed. Then, you can run the following command to install the dependencies:
```bash
npm install
```

### Configuration
To configure the bot, you need to create a `.env` from the `.env.example` file and fill the values.

To get those values, you need to create a new application in the [Discord Developer Portal](https://discord.com/developers/applications) and create a bot. Then, you can get the `CLIENT_ID` in the `General Information` tab and the `BOT_TOKEN` in the `Bot` tab.

To get the other values, you need to enable the `Developer Mode` in Discord and right-click on the server (`GUILD_ID`) and the channel (`CHANNEL_ID`) where you want the bot to send the messages.

WARNING: The token is a secret value, so you should not share it with anyone.

### Running
To run the bot, you can use the following command:
```bash
tsx src/index.ts
```
