import { Client, CommandInteraction, Intents } from 'discord.js';
import { handler } from './nftlist';

const token = process.env['BOT_TOKEN'];
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!'); 
  console.log(`Logged in as ${client?.user?.tag}.`);
});

client.on('interactionCreate', async (interaction: CommandInteraction) => {
  console.log(`${interaction?.user?.tag} in #${interaction?.channel?.fetch} triggered an interaction.`);
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
    console.log('Pong!');
  } else if (commandName === 'nftlist') {
    await handler(interaction);
  }
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  console.log(JSON.stringify(message));
});

// Login to Discord with your client's token
client.login(token);