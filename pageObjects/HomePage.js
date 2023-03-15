const { expect } = require("@playwright/test");
const { BASE_URL, TITLE } = require('../constants/index');
class HomePage{
    constructor(page) {
        this.page = page;
        this.logo = page.locator(`//a[@id='nava']`);
      }

    async navigateToHomePageAndValidate(page){
        console.log("********** Start navigateToHomePageAndValidate ********** \n")
        await page.goto(BASE_URL);
        await expect(page).toHaveTitle(TITLE);
        await expect(this.logo).toBeVisible();
        console.log("********** Finish navigateToHomePageAndValidate ********** \n")
    }
}

module.exports = HomePage;
