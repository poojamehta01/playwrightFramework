const { expect } = require("@playwright/test");

class HomePage{
    constructor(page) {
        this.page = page;
        this.logoLoc = page.locator(`//a[@id='nava']`);
      }

    async navigateToHomePageAndValidate(page){
        await page.goto("https://www.demoblaze.com/index.html");
        await expect(page).toHaveTitle("STORE");
        await expect(this.logoLoc).toBeVisible();
    }
}

module.exports = HomePage;
