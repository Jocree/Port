const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MTE3MTM2OTgyMDU3MTMxMjE0OA.GHaw5V.DqSgdlHDj3a-YoeI1OXzYaZ9EBRv6P0h8EnKUQ'; // Substitua 'SEU_TOKEN_AQUI' pelo seu token

client.on('ready', () => {
  console.log(`Conectado como ${client.user.tag}!`);
});

client.login(token);

client.on('ready', () => {
    console.log(`Conectado como ${client.user.tag}!`);
    console.log(`Status Online: ${client.user.presence.status}`);
  });
  