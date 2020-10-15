/* eslint-disable sort-keys */
const fs = require('fs');
const puppeteer = require('puppeteer');
const flows = require('./flows');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const collectLogs = async ({ label, numberOfInteractions = 0 }) => {
    const logs = await page.evaluate(() => window.profiler);
    const fileName = getFileName(label);

    fs.writeFile(
      `automation/${fileName}`,
      JSON.stringify({ logs, numberOfInteractions },
      ), err => {
        if (err) throw err;
        console.log(`\n\x1b[37mReport written as file: \x1b[36m${fileName}\n`);
      });

    await page.evaluate(() => {
      window.profiler = [];
    });
  };

  const formatLabel = label => label
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const handleActions = async actions => {
    for (let i = 0; i < actions.length; i += 2) await page[actions[i]](actions[i + 1]);
  };

  const hyphenateString = str => str
    .replace(/(\/|\s|:|\.)/g, '-')
    .replace(',', '')
    .replace(/-{2,}/g, '-')
    .replace(/-$/, '');

  const getFileName = label =>
    `${hyphenateString(`${formatLabel(label)}-${new Date().toLocaleString()}`)}.json`;

  await page.goto('http://localhost:1235/index.html');

  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1080,
    width: 1920,
  });

  collectLogs({ label: 'Mount' });

  for (const [flow, actions] of Object.entries(flows)) {
    await handleActions(actions)
      .then(() => collectLogs({
        label: flow,
        numberOfInteractions: actions.length / 2,
      }));
  }

  await browser.close();
})();
