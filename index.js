// const puppeteer = require("puppeteer");

// console.log("before");

// let currPage;

// const browserOpenPromise = puppeteer.launch({
//   headless: false,
//   defaultViewport:null , 
//   slowMo:true , 
//     args:["--start-maximized"]
// });

// browserOpenPromise.then((browser)=>{
//   console.log("browwer" ,browser);
//   // currently open tab 
//  const pageArrPromise =  browser.pages();
//  return pageArrPromise;

// }).then((browserPages)=>{
//   currPage = browserPages[0];
//   let gotoPromise = currPage.goto("https://www.google.com");
//   return gotoPromise;
// }).then(()=>{
//   const searchInputSelector = 'textarea[name="q"]'; // The correct selector for Google's search input field
//   return currPage.waitForSelector(searchInputSelector , {visible:true});
  
// }).then(()=>{

//   const searchInputSelector = 'textarea[name="q"]'; 
//   // type any element of that page -> selector 
//  const keysWillBeSendPromise =  currPage.type(searchInputSelector , "instagram");
//  return keysWillBeSendPromise;
// }).then(()=>{
//   // using keyboard press enter (special character)
//   let enterWillBePressed =  currPage.keyboard.press("Enter");
//   return enterWillBePressed;
// }).then(()=>{
//   let elementWaitPromise =  currPage.waitForSelector("h3.LC20lb" , {visible:true});
  
//   return elementWaitPromise;
// })
// .then(()=>{
//   const keysWillBeSendPromise =  currPage.click("h3.LC20lb");
//   return keysWillBeSendPromise;
// })

// .catch((error)=>{
//   console.log("error ",error);
// })




const express = require("express");
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 4000;

app.use(cors({
  origin:"*",
  credentials:true
}));


// middleware
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(cors({
  origin:"*",
  credentials:true
}));
app.use(express.json());

const Profile = require("./routes/User");
app.use("/api/v1", Profile);



app.listen(PORT, () => {
  console.log("app start at port 4000");
});

app.get("/", (req, res) => {
  res.send("this is an get app");
});

