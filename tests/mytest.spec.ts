import { test, expect } from '@playwright/test';

test('Verify page title',  async ({ page }) => {
   await page.goto('https://automationexercise.com/');

   let title:string= await page.title();
    console.log("Page title is: ", title);

  await expect(page).toHaveTitle('Automation Exercise');


});

