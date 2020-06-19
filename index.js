const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('ON');
});

client.on('message', (message) => {
  if(message.content === '메롱') {
    message.reply('종환');
  }
});

client.on('message', (message) => {
  if(message.content === '짜증날땐?') {
      message.reply('짜장면!');
  }
});

client.on('message', (message) => {
  if(message.content === '우울할땐??') {
      message.reply('울면!!');
  }
});

client.on('message', (message) => {
  if(message.content === '복잡할땐?') {
      message.reply('볶음밥!');
  }
});

client.on('message', (message) => {
  if(message.content === '탕탕탕탕!!') {
      message.reply('탕수육!!');
  }
});

client.on('message', (message) => {
  if(message.content === '귀승이 뭐야?') {
      message.reply('귀(지가득)승(민이)');
  }
});

client.on('message', (message) => {
  if(message.content === '지니지니') {
      message.reply('메찌찌');
  }
});

client.on('message', (message) => {
  if(message.content === '팡규팡규') {
      message.reply('양팡규?');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅎㅎ') {
      message.reply('^ㅡ^');
  }
});

client.on('message', (message) => {
  if(message.content === '또롱이?') {
      message.reply('또롱또롱');
  }
});

client.on('message', (message) => {
  if(message.content === '종환이는') {
      message.reply('[조,]');
  }
});

client.on('message', (message) => {
  if(message.content === '너는 다 좋은데 벽이 있는 것 같아...') {
      message.reply('"완벽.."');
  }
});

client.on('message', (message) => {
  if(message.content === '너는 음계로 치면 레가 아닐까?') {
      message.reply('"도를 넘어서 미치기 직전이니까.."');
  }
});

client.on('message', (message) => {
  if(message.content === '너 때문에 또 전쟁 났다며 ㅋㅋ') {
      message.reply('"귀여war.."');
  }
});

client.on('message', (message) => {
  if(message.content === '너 왜 맨날 같은 티만 입어?') {
      message.reply('응?');
  }
});

client.on('message', (message) => {
  if(message.content === '"프리티"') {
      message.reply('(빠직)');
  }
});

client.login(token);
