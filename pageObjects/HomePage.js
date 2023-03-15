const { expect } = require("@playwright/test");

class HomePage{
    constructor(page) {
        this.page = page;
        this.logo = page.locator(`//a[@id='nava']`);
        this.product = page.locator(`//*[contains(text(),'Samsung galaxy s6')]`);
        this.addToCart = page.locator(`//*[contains(text(),'Add to cart')]`);
        this.actualPageUrl = 'https://www.demoblaze.com/prod.html?idp_=1';

      }

    async navigateToHomePageAndValidate(page){
        console.log("********** start navigateToHomePageAndValidate ********** \n")
        await page.goto("https://www.demoblaze.com/index.html");
        await expect(page).toHaveTitle("STORE");
        await expect(this.logo).toBeVisible();
        console.log("********** finish navigateToHomePageAndValidate ********** \n")
    }
}

module.exports = HomePage;
