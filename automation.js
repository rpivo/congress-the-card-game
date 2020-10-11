const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const fileName = 'automation.json';
  const page = await browser.newPage();

  await page.goto('http://localhost:1235/index.html');

  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1080,
    width: 1920,
  });

  const logs = await page.evaluate(() => window.profiler);

  fs.writeFile(fileName, JSON.stringify(logs), (err) => {
    if (err) throw err;
    console.log(`\n\x1b[37mReport written as file: \x1b[36m${fileName}\n`);
  });

  await browser.close();
})();
