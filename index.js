const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('ON');
});

client.on('message', (message) => {
  if(message.content === '-민아') {
      message.reply('"❤️"');
  }
});

client.on('message', (message) => {
  if(message.content === '-귀요민아') {
      message.reply('(˃_˂)');
  }
});

client.on('message', (message) => {
  if(message.content === '-빵민아') {
      message.reply('🍞');
  }
});

client.on('message', (message) => {
  if(message.content === '-민아 누나 좋아해요') {
      message.reply('^-^');
  }
});

client.login(token);
