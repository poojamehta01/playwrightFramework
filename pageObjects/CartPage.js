const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
class CartPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)

      }
    
    async clickWebElementCartPage(page){
        console.log("********** Start clickWebElementCartPage ********** \n")
        const webElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'a', 'id','cartur')
        await webElement.click()
        console.log("********** Finish clickWebElementCartPage ********** \n")
    }
    async validateProductOnCartPage(page){
        console.log("********** Start validateProductOnCartPage ********** \n")
        const webElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'tr', 'class','success')
        this.commonValidators.validateWebElementToBeVisible(webElement);
        console.log("********** Finish validateProductOnCartPage ********** \n")
    }



}

module.exports = CartPage;
