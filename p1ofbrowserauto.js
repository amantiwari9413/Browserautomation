const puppeteer=require('puppeteer');
let cpage;

//puppeteer ke andhar bhahut se class hote hai ttha uske andhar function hote hai wo function hamesa ek promise return karte hai 

//ye function ek promise return karta hai 
let browserOpenpromise=puppeteer.launch(
    {headless:false,
     //this property use to set defult viewprot
     defaultViewport:null,
     //this property is use to define the speed of puppeteer 
      slowMo:200,
     //this property is use to miximized the browser window or current window
     args:["--start-maximized"]
     
    });
//chuki promise return karta hai to mai ise .then() handle kar skta hu

browserOpenpromise
//yaha par jo .then() se mai promise ke dawar return kiya huaa jo value hai use handle kar r haa hu 
// yaha maine ek browser nam ka argument pass kiya hai kauki ye promise ke dhawar return ki value ko hold karta hai mai chahu to ise hata bhi skta hu chuki mujhe aage isse kam lena hia to maine likha hai 
.then((browser)=>{
    // yaha maine pages() nam ke function ka upyog kiya hai jo ki page class ka function hai ye function hamko An array of all open pages inside the Browser retur  ye bhi ek promise hi hoti hai 
    return browser.pages();
})
.then((returnpage)=>{
    cpage=returnpage[0];
    return cpage.goto("https://www.google.com/");
})
.then(()=>{
   let findPageelement=cpage.waitForSelector("div textarea", {visible:true});
   return findPageelement;
})
.then(()=>{
  return  cpage.type("div textarea" , "zomato");
})
.then(()=>{
    //cpage.keybord.press("Enter");
  return   cpage.keyboard.press("Enter");
}) 
.then(()=>{
    return cpage.waitForSelector("div a h3" , {visible:true});
})
.then(()=>{
    return cpage.click("div a h3");
})
.then(()=>{
    return cpage.goto("https://www.zomato.com/jodhpur")
})
.then(()=>{
    return cpage.waitForSelector('input[placeholder="Search for restaurant, cuisine or a dish"]' , {visible:true})
})
.then(()=>{
   return cpage.click('input[placeholder="Search for restaurant, cuisine or a dish"]')
})
.then(()=>{
    return cpage.type('input[placeholder="Search for restaurant, cuisine or a dish"]' , "janta sweet home");
})
.then(()=>{
    return cpage.waitForSelector('div img[ alt="Restaurant Image"]', {visible:true});
})
.then(()=>{
    return cpage.click('div img[ alt="Restaurant Image"]');
})
.then(()=>{
    return cpage.goto("https://www.zomato.com/jodhpur/janta-sweet-home-shastri-nagar/order");
})
.then(()=>{
    return cpage.waitForSelector('input[ type="text"]')
})
.then(()=>{
    return cpage.click('input[ type="text"]');
})
.then(()=>{
    return cpage.type('input[ type="text"]' , "mirchi vada");
})
.catch((error)=>{
    console.log("error will be happe" + error);
})
