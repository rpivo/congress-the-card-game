/* eslint-disable sort-keys */
const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const flows = {
    // land on play page
    mount: ({ label }) => collectLogs(label),
    // hover over a playArea card. then hover over the playArea
    playAreaCardHover: async ({ label }) => {
      await page.hover('div.playArea div.card');
      await page.click('div.playArea');
      collectLogs(label);
    },
    // toggle the active state of a playArea card
    playAreaCardToggleActive: async ({ label }) => {
      await page.click('div.playArea div.card');
      await page.click('div.playArea');
      collectLogs(label);
    },
    // click on each card in the playArea, one by one. Click the playArea at the end to remove
    // card active state
    clickEachPlayAreaCard: async ({ label }) => {
      await page.click('div.playArea div.card:nth-of-type(1)');
      await page.click('div.playArea div.card:nth-of-type(2)');
      await page.click('div.playArea div.card:nth-of-type(3)');
      await page.click('div.playArea div.card:nth-of-type(4)');
      await page.click('div.playArea div.card:nth-of-type(5)');
      await page.click('div.playArea');
      collectLogs(label);
    },
    // draw a card. click the playArea afterward to put the hand back in the hidden state
    drawCard: async ({ label }) => {
      await page.click('div.stackedCard');
      await page.click('div.playArea');
      collectLogs(label);
    },
  };

  const collectLogs = async (label) => {
    const logs = await page.evaluate(() => window.profiler);
    const fileName = getFileName(label);

    fs.writeFile(`automation/${fileName}`, JSON.stringify(logs), (err) => {
      if (err) throw err;
      console.log(`\n\x1b[37mReport written as file: \x1b[36m${fileName}\n`);
    });
  };

  const hyphenateString = (str) => str
    .replace(/(\/|\s|:|\.)/g, '-')
    .replace(',', '')
    .replace(/-{2,}/g, '-')
    .replace(/-$/, '');

  const getFileName = label =>
    `${hyphenateString(`automation-${label}-${new Date().toLocaleString()}`)}.json`;

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
