const puppeteer = require('puppeteer');

const rand_url =
  'https://www.nike.com/t/air-force-1-mens-boots-jSg8gL/DD0747-300'(
    
      async function initBrowser() {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(rand_url);
      return page;
      
    }
    )();
  

async function addToCart(page) {
        await page.$eva("button[class= 'add-to-cart-btn']")
    }