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
        console.log("********** Finish clickWebElementCartPage ********** \n")
    }
    async validateProductOnCartPage(page){
        console.log("********** Start validateProductOnCartPage ********** \n")
      
        const tableElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'tbody','id','tbodyid')
        this.commonValidators.validateWebElementCount(tableElement,1)
    ;
        console.log("********** Finish validateProductOnCartPage ********** \n")
    }



}

module.exports = CartPage;
