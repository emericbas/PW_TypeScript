import { test, expect, Locator } from '@playwright/test';

test('Verify XPath Locators',  async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    //1. Absolute XPath - Start with the root element and navigate to the target element.
    //Syntax: //tagname[@attribute='value']
    //Example: //input[@type='text']
    //Example: //input[@type='text']
   
    const absoluteLogo:Locator=page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
   await expect(absoluteLogo).toBeVisible();

   //2. Relative XPath - logo
   //Syntax: ./tagname[@attribute='value']
   //Example: ./input[@type='text']
   //Example: ./input[@type='text']
   const relativeLogo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
   await expect(relativeLogo).toBeVisible();

   //3.  contains() - Find an element by the text it contains.
const products:Locator = page.locator("//h2/a[contains(@href,'computer')]");
const productsCount= await products. count();
console.log("Computer related products:", productsCount); //4
expect(productsCount).toBeGreaterThan(0);

 //console.log(await products.textContent()) //Error: strict mode violation(4 product oldugu icin kafasi karisiyor)
 console.log("First computer releated product:",await products.first().textContent());
 console.log("Last computer releated product:", await products.last().textContent());
 console.log("Nth computer releated product:", await products.nth(2).textContent());//index is starting from 0(zero)

 let productTitles:string[]=await products.allTextContents(); //getting all the matched products into an array(promise'de await kullan, 
 // string,  locater vb type belirt, sonra kullanabilmek icin let ile store et)

 console.log("All computer releated products titles: ")

for(let pt of productTitles)
{
    console.log(pt);
}


//4. start-with()
const buildingProducts:Locator= page.locator("//h2/a[starts-with(@href,'/build')]")//returns multiple elements

const count:number =await buildingProducts.count();
expect(count).toBeGreaterThan(0);

//5. text()

const regLink:Locator=page.locator("//a[text()='Register']");
await expect(regLink).toBeVisible();

//6. last()

const lastItem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastItem).toBeVisible();
console.log("Text content of last element: ",await lastItem.textContent());

//7. position()

const positionItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionItem).toBeVisible();
console.log("Text content of position element: ",await positionItem.textContent());


});