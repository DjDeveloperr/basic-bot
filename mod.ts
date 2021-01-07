import { config } from "./config.ts";
import { Client, GatewayIntents } from "./deps.ts";

// Create our client object - or you can say bot
const client = new Client();

// Listen for "ready" event - when bot is "logged in"
client.once("ready", () => {
  console.log(`Connected as ${client.user?.tag}!`);
});

// Listen for "messageCreate" event - when a new Message is sent (or created)
client.on("messageCreate", (msg) => {
  // Ignore bots by simply returning
  if (msg.author.bot) return;

  // If message is "!ping" then reply
  if (msg.content == "!ping") {
    msg.reply("Pong! WS Heartbeat: " + Math.floor(client.ping) + "ms");
  }
});

console.log("Connecting...");
// Finally, connect our client to Discord using token in config with required intents
client.connect(config.token, [
  GatewayIntents.DIRECT_MESSAGES,
  GatewayIntents.GUILD_MESSAGES,
  GatewayIntents.GUILDS,
]);
