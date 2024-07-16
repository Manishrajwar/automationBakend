const puppeteer = require("puppeteer");

(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-notifications"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com", { waitUntil: "networkidle2" });
  await page.screenshot({ path: "example.png" });

  const searchInputSelector = 'input[type="text"]';
  const searchInputSelector2 = 'input[type="password"]';
  await page.waitForSelector(searchInputSelector, { visible: true });
  await page.waitForSelector(searchInputSelector2, { visible: true });
  await page.type(searchInputSelector, "manish_rajwar24", { delay: 100 });
  await page.type(searchInputSelector2, "Manish@30", { delay: 100 });

  await page.waitForSelector('button[type="submit"]', { visible: true });
  await page.click('button[type="submit"]');

  //  await page.click('button._a9--');
  // const buttonSelector = 'button._a9--._ap36._a9_0';
  // await page.waitForSelector(buttonSelector, { visible: true });
  // await page.click(buttonSelector);

  const svgSelector = 'svg[aria-label="Search"]';
  await page.waitForSelector(svgSelector, { visible: true });
  await page.click(svgSelector);

  const srchInputSelector = 'input[aria-label="Search input"]';
  await page.waitForSelector(srchInputSelector, { visible: true });
  await page.type(srchInputSelector, "pepper_pepcoding", { delay: 100 });

  await page.waitForSelector(
    ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np",
    { visible: true }
  );

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click(
      ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np"
    ),
  ]);

  // _aagw
  await page.waitForSelector("._aagw", { visible: true });
  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click("._aagw"),
  ]);

  //  ! for like not working
  //       await page.waitForSelector('svg[aria-label="Like"]' , {visible:true});
  //       // await page.click('svg[aria-label="Like"]');

  //       await Promise.all([
  //         page.waitForNavigation({waitUntil:"networkidle2"}) ,
  //          page.click('svg[aria-label="Like"]') ,
  // ])

  // ! for like end

  await page.waitForSelector("button._abl-");

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    ,
    page.click("._abl-"),
  ]);
})();
