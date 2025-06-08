venom
  .create({
    headless: true,
    browserArgs: ['--no-sandbox'],
    useChrome: false, // isso força usar puppeteer puro
    disableWelcome: true
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));
