<h1 align="center">ThisCord.js</h1>

<h2>Description</h2>
<p>A simple JavaScript library that listens to Discord API Gateway</p>

<h2>Checklist</h2>

 - [X] Listen to Discord API Gateway
 - [X] Receive events (MESSAGE_CREATE, READY, etc...)
 - [ ] Validate token before opening a connection
 - [ ] Check if the token is for a bot or a user account
 - [ ] Documentation
 - [ ] All events

<h2>Installation</h2>
```sh-session
npm i @danspotnytool/thiscord.js
```

<h2>Example</h2>

```js
const ThisCord = require('@danspotnytool/thiscord.js'); // Because npm won't allow me to use `thiscord,js`
const client = new ThisCord.Client();

client.on('ready', () => {
     console.log('Ready!');
});

client.on('messageCreate', (msg) => {
     console.log(`${msg.author.username}: ${msg.content}`);
});

client.login('TrustMeThisTokenIsLegit');
```

<h2>Contributing</h2>

 - Before creating an issue, please ensure that it hasn't already been reported/suggested
 - I need help with documentation because I can't understand TypeScript and there's not enough tutorial for JSdoc <img src="https://media.discordapp.net/attachments/964840807586746368/968883140225556530/866832264490909728.webp?width=86&height=86" height="15">