const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const flows = {
    mount: async () => {
      const logs = await page.evaluate(() => window.profiler);
      writeToFile(logs);
    },
  };

  const hyphenateString = (str) => str
    .replace(/(\/|\s|:|\.)/g, '-')
    .replace(',', '')
    .replace(/-{2,}/g, '-')
    .replace(/-$/, '');

  const fileName = `${hyphenateString(`automation-${new Date().toLocaleString()}`)}.json`;

  const writeToFile = logs =>
    fs.writeFile(fileName, JSON.stringify(logs), (err) => {
      if (err) throw err;
      console.log(`\n\x1b[37mReport written as file: \x1b[36m${fileName}\n`);
    });

  await page.goto('http://localhost:1235/index.html');

  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1080,
    width: 1920,
  });

  for (const flow in flows) {
    await flows[flow]();
    await page.evaluate(() => {
      window.profiler = [];
    });
  }

  await browser.close();
})();
