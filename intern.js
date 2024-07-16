const puppeteer = require("puppeteer");

(async function () {
  let whatyouwant = "Internships";
  let location = "Work from Home";

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-notifications", "--start-maximized"],
    defaultViewport: null,
    slowMo: true,
  });

  const page = await browser.newPage();
  await page.goto("https://internshala.com", { waitUntil: "networkidle2" });

  const primaryLoginSelector = "button.login-cta";
  const alternativeLoginSelector = "a.register-student-cta"; // Example of an alternative selector

  const EmailInputSelect = "input#modal_email";
  const passInputSelect = "input#modal_password";
  const loginSubmitSelect = "button#modal_login_submit";

  try {
    await page.waitForSelector(primaryLoginSelector, {
      visible: true,
      timeout: 2000,
    });
    await page.click(primaryLoginSelector);
  } catch (error) {
    try {
      await page.waitForSelector(alternativeLoginSelector, {
        visible: true,
        timeout: 2000,
      });
      await page.click(alternativeLoginSelector);
      const loginSelectBtn = 'span[data-target="#login-modal"]';
      await page.waitForSelector(loginSelectBtn, {
        visible: true,
        timeout: 2000,
      });
      await page.click(loginSelectBtn);

    } catch (error) {
      console.log(
        `${alternativeLoginSelector} not found either. Performing alternative actions...`
      );
    }
  }

  await page.waitForSelector(EmailInputSelect, { visible: true });
  await page.waitForSelector(passInputSelect, { visible: true });
  await page.type(EmailInputSelect, "manishsinghrajwar80@gmail.com", {
    delay: 100,
  });
  await page.type(passInputSelect, "Manish@30", { delay: 100 });

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }), // Wait for the page to navigate after login
    page.waitForSelector(loginSubmitSelect, { visible: true }),
    page.click(loginSubmitSelect),
  ]);

  if (whatyouwant === "Internships") {
    if (location === "Work from Home") {
      await page.goto(
        "https://internshala.com/internships/work-from-home-internships/",
        { waitUntil: "networkidle2" }
      );
      console.log("Navigated to work from home internships");
    }
  }

  const srchTextSelec = "input#matching_preference";
  // Click on srchTextSelec (your preferences checkbox)
  await page.waitForSelector(srchTextSelec, { visible: true });
  await page.click(srchTextSelec);
  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await delay(2000);
  
  for(let i = 1;i<5;i++){
        
    const internSelector = `div[data-source_cta="easy_apply"]:nth-child(1)`;

  // Now interact with the first checkbox of the updated data
  await page.waitForSelector(internSelector, { visible: true });
  await page.click(internSelector);

  const continueSelec = "button#continue_button";

  await page.waitForSelector(continueSelec, { visible: true });
  await page.click(continueSelec);

  const hireQueSelec = "a.copyCoverLetterTitle";
  await page.waitForSelector(hireQueSelec, { visible: true });
  await page.click(hireQueSelec );

  const inputSubmit = "input#submit";
  await page.waitForSelector(inputSubmit, { visible: true });
  await page.click(inputSubmit);

  const backToInternshipsCta = "a#backToInternshipsCta";
  await page.waitForSelector(backToInternshipsCta, { visible: true });
  await page.click(backToInternshipsCta);

  await delay(1000);


}
})();
