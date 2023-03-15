const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators');
const HomePage = require("./HomePage");

class CartPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)
        this.homePage = new HomePage(page)

      }
    
    async clickWebElementCartPage(page){
        console.log("********** Start clickWebElementCartPage ********** \n")
        const webElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'a', 'id','cartur')
        await webElement.click()
        // const webElement = await page.locator(`//a[@id='cartur']`)
        // await webElement.click({ timeout: 30000 })
        console.log("********** Finish clickWebElementCartPage ********** \n")
    }
    async validateProductOnCartPage(page){
        console.log("********** Start validateProductOnCartPage ********** \n")
      
        const tableElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'tbody','id','tbodyid')
        this.commonValidators.validateWebElementCount(tableElement,1)
        //const webElement = await this.commonLocators.getWebElementByRole(page,'cell','Title')
        // this.homePage.
        // await page.getByRole('cell', { name: 'Title' }).click();

        // for (const li of await this.commonLocators.getWebElementByRole(page,'cell','Title').all())
        //     await li.click();
        console.log("********** Finish validateProductOnCartPage ********** \n")
    }



}

module.exports = CartPage;
