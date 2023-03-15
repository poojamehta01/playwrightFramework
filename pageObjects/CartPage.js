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
        console.log("********** started clickWebElementCartPage ********** \n")
        const webElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'a', 'id','cartur')
        await webElement.click()
        console.log("********** finish clickWebElementCartPage ********** \n")
    }


}

module.exports = CartPage;
