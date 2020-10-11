const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const flows = {
    mount: async ({ label }) => {
      const logs = await page.evaluate(() => window.profiler);
      writeToFile(logs, label);
    },
  };

  const hyphenateString = (str) => str
    .replace(/(\/|\s|:|\.)/g, '-')
    .replace(',', '')
    .replace(/-{2,}/g, '-')
    .replace(/-$/, '');

  const getFileName = label =>
    `${hyphenateString(`automation-${label}-${new Date().toLocaleString()}`)}.json`;

  const writeToFile = (logs, label) => {
    const fileName = getFileName(label);
    fs.writeFile(fileName, JSON.stringify(logs), (err) => {
      if (err) throw err;
      console.log(`\n\x1b[37mReport written as file: \x1b[36m${fileName}\n`);
    });
  };

  await page.goto('http://localhost:1235/index.html');

  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1080,
    width: 1920,
  });

  for (const flow in flows) {
    await flows[flow]({ label: flow });
    await page.evaluate(() => {
      window.profiler = [];
    });
  }

  await browser.close();
})();
