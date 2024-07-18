// !   sendOTP
//! signup

const puppeteer = require("puppeteer");

// exports.start = async (req, res) => {
//    console.log("start");
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: ["--disable-notifications"],
//   });
//   const page = await browser.newPage();
//   await page.goto("https://www.instagram.com", { waitUntil: "networkidle2" });
//   await page.screenshot({ path: "example.png" });

//   await page.close();

//   // const searchInputSelector = 'input[type="text"]';
//   // const searchInputSelector2 = 'input[type="password"]';
//   // await page.waitForSelector(searchInputSelector, { visible: true });
//   // await page.waitForSelector(searchInputSelector2, { visible: true });
//   // await page.type(searchInputSelector, "manish_rajwar24", { delay: 100 });
//   // await page.type(searchInputSelector2, "Manish@30", { delay: 100 });

//   // await page.waitForSelector('button[type="submit"]', { visible: true });
//   // await page.click('button[type="submit"]');

//   // //  await page.click('button._a9--');
//   // // const buttonSelector = 'button._a9--._ap36._a9_0';
//   // // await page.waitForSelector(buttonSelector, { visible: true });
//   // // await page.click(buttonSelector);

//   // const svgSelector = 'svg[aria-label="Search"]';
//   // await page.waitForSelector(svgSelector, { visible: true });
//   // await page.click(svgSelector);

//   // const srchInputSelector = 'input[aria-label="Search input"]';
//   // await page.waitForSelector(srchInputSelector, { visible: true });
//   // await page.type(srchInputSelector, "pepper_pepcoding", { delay: 100 });

//   // await page.waitForSelector(
//   //   ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np",
//   //   { visible: true }
//   // );

//   // await Promise.all([
//   //   page.waitForNavigation({ waitUntil: "networkidle2" }),
//   //   page.click(
//   //     ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np"
//   //   ),
//   // ]);

//   // // _aagw
//   // await page.waitForSelector("._aagw", { visible: true });
//   // await Promise.all([
//   //   page.waitForNavigation({ waitUntil: "networkidle2" }),
//   //   page.click("._aagw"),
//   // ]);

//   //  ! for like not working
//   //       await page.waitForSelector('svg[aria-label="Like"]' , {visible:true});
//   //       // await page.click('svg[aria-label="Like"]');

//   //       await Promise.all([
//   //         page.waitForNavigation({waitUntil:"networkidle2"}) ,
//   //          page.click('svg[aria-label="Like"]') ,
//   // ])

//   // ! for like end

//   // await page.waitForSelector("button._abl-");

//   // await Promise.all([
//   //   page.waitForNavigation({ waitUntil: "networkidle2" }),
//   //   ,
//   //   page.click("._abl-"),
//   // ]);

//   return res.status(200).json({
//     status:true , 
//     message:"Done" ,
//   })
// };


// ! for likedin 
exports.start = async(req , res)=>{
   try{

    const {email , password } = req.body;

    let whatyouwant = "Internships";
    let location = "Work from Home";
  
    // const browser = await puppeteer.launch({
    //   headless: false,
    //   executablePath: "C:\Program Files\Google\Chrome\Application\chrome.exe",
    //   // args: ["--disable-notifications", "--start-maximized" , "--no-sandbox", "--disable-setuid-sandbox"],
    //   defaultViewport: null,
    //   slowMo: true,
    // });

    const browser = await puppeteer.launch({
      headless: false,
      executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      // args: ["--disable-notifications", "--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
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
    await page.type(EmailInputSelect, email, {
      delay: 100,
    });
    await page.type(passInputSelect, password, { delay: 100 });
  
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

    console.log("click on backe4");

  
    const hireQueSelec = "a.copyCoverLetterTitle";
    await page.waitForSelector(hireQueSelec, { visible: true });
    await page.click(hireQueSelec );
    console.log("click on backe3");

  
    const inputSubmit = "input#submit";
    await page.waitForSelector(inputSubmit, { visible: true });
    await page.click(inputSubmit);

    await delay(3000);

    console.log("click on backe2");

  
    const backToInternshipsCta = "a#backToInternshipsCta";
    await page.waitForSelector(backToInternshipsCta, { visible: true });
    await page.click(backToInternshipsCta);
    console.log("click on backe");
  
    await delay(2000);
  }

 await page.close();
 
 return res.send('API endpoint hit successfully');

   } catch(error){
    console.log("error" ,error);
    return res.status(500).json({
      status:false , 
      message:error.message
    })
   }
}