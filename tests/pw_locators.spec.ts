/*
DOM+ Document Object Model_ is an API Interface provided by browser.
 locater information 
 1) page.getByAltText()
 2) page.getByText()
 3) page.getByRole(role, options)
 4) page.getByLabel(label)
 5) page.getByPlaceholder(text)
 6) page.getByTitle(title)
 7) page.getByTestId(testId)
 
 
 


    */

 import { test, expect, Locator} from '@playwright/test';

 test('Verify Playwright Locators',  async ({ page }) => {
await page.goto('https://demo.nopcommerce.com/');

//1. page.getByAltText(text) - identify images (and similar elements) base on  the alt attribute. 
//Use this locator when the element has an alt text such as image and area elements.
 const logo:Locator=  page.getByAltText("nopCommerce demo store")
 await expect(logo).toBeVisible();

 //2. page.getByText(text) - Find an element by the text it contains. You can match by a substring, exact string
//Locate by visible text
// use this locater to find interactive elements like div, span, p, etc
//For interactive elements like button, a, input ,etc use role locators.
//<p> Welcome to our store </p>
//<div> Welcome to our store </div>

await expect(page.getByText("Welcome to our store")).toBeVisible(); //provided full string
await expect(page.getByText("Welcome to ")).toBeVisible(); //provided substring
await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); //regular expression 

//3. page.getByRole(role, options) - Find an element by its role and optionally other properties.
//Use this locator when the element has a role attribute such as button, input, etc.
//<button role="button">Click me</button>
//<input role="textbox" placeholder="Enter your name">
await page.getByRole("link", { name: 'Register'}).click();
await expect(page.getByRole("heading", { name: 'Register'})).toBeVisible();// you can also use getByText() to locate the element

//4. page.getByLabel(label) - Find an element by the text it labels.
//Use this locator when the element has a label attribute such as input, select, etc.
//<label for="name">Name</label>
//<label>Name</label>
await page.getByLabel("First name: ").fill("John"); //type is deprecated
 await page.getByLabel("Last name: ").fill("Kenedy");
 await page.getByLabel("Email: ").fill("abc@gmail.com");


//5. page.getByPlaceholder(placeholder) - Find an element by the placeholder attribute.
//Use this locator when the element has a placeholder attribute such as input, select, etc.
//<input placeholder="Enter your name">
//<input placeholder="Enter your email">
await page.getByPlaceholder("Search store").fill("Apple MacBook Pro");


//6. page.getByTitle(title) - Find an element by the title attribute.
//Use this locator when the element has a title attribute such as input, select, etc.
//<input title="Enter your name">
//<input title="Enter your email">

await expect(page.getByTitle("Home page link ")).toHaveText("Home");
await expect(page.getByTitle("HyperText Markup Language ")).toHaveText("HTML");

//7. page.getByTestId(testId) - Find an element by the testId attribute.
//Use this locator when the element has a testId attribute such as input, select, etc.
//<input data-testid="name">
//<input data-testid="email">
await expect(page.getByTestId("profile-name")).toHaveText("abc@gmail.com");



 });