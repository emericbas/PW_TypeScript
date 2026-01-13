import { test, expect, Locator} from '@playwright/test';
 /*
    FASTER
    Playwright Specific Locators> CSS> XPath
    */

//UsingXPath
/*
 test(' Handle Dynamic Elements Using XPath',  async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

// Loop to click the button 5 times

for (let i = 1; i <= 5; i++) {
    let button:Locator=page.locator('//button[text()="STOP" or text()="START"]') ;//locate the button with either "Stop" or "Start"
   // let button:Locator=await page.locator('//button[@name="start"]');
   // let button:Locator=await page.locator('//button[@name="start" or @name="stop"]');
   // let button:Locator=await page.locator('//button[contains(@name="st"]');
   // let button:Locator=await page.locator('//button[starts-with@name="st"]');


// Click thebutton and wait for the dynamic success message

await button.click();
await page.waitForTimeout(2000);
};
});
*/

/*
//Using CSS

test(' Handle Dynamic Elements Using CSS',  async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Loop to click the button 5 times
    
    for (let i = 1; i <= 5; i++) {
     const button=page.locator('button[name="start"], button[name="stop"]') ;//locate the button with either "Stop" or "Start"
    
    // Click thebutton and wait for the dynamic success message
    
    await button.click();
    await page.waitForTimeout(2000);
    };
    });
    */

    //Using Playwright Specific Locators

test(' Handle Dynamic Elements Using Playwright Specific Locators',  async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Loop to click the button 5 times
    
    for (let i = 1; i <= 5; i++) {
     const button=page.getByRole('button',{name: /START|STOP/}) //locate the button with either "Stop" or "Start
    
    await button.click();
    await page.waitForTimeout(2000);
    };
    });
   