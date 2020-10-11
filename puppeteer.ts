const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:1235/index.html');

  await page.setViewport({
    deviceScaleFactor: 1,
    height: 1080,
    width: 1920,
  });
  await page.screenshot({ path: 'automation-screenshot.png' });

  await browser.close();
})();
