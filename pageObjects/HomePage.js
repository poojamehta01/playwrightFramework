const { expect } = require("@playwright/test");

class HomePage{
    constructor(page) {
        this.page = page;
        this.logo = page.locator(`//a[@id='nava']`);
      }

    async navigateToHomePageAndValidate(page){
        console.log("********** Start navigateToHomePageAndValidate ********** \n")
        await page.goto("https://www.demoblaze.com/index.html");
        await expect(page).toHaveTitle("STORE");
        await expect(this.logo).toBeVisible();
        console.log("********** Finish navigateToHomePageAndValidate ********** \n")
    }
}

module.exports = HomePage;
