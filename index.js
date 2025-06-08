const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi' && message.isGroupMsg === false) {
      client.sendText(message.from, 'Oi! Tudo bem? 🤖');
    }
  });
}
