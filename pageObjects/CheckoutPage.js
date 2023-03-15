const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
let actualAmount = ""
class CheckoutPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)

      }
    
    async clickWebElementPlaceOrder(page){
        console.log("********** Start clickWebElementPlaceOrder ********** \n")
        const amountWebElement = await this.commonLocators.getWebElementByXPathBasedOnTagNameValue(page,'h3','id','totalp')
        await this.commonValidators.validateWebElementCount(amountWebElement,1)
        actualAmount = await this.commonLocators.getTextContentForWebElement(await amountWebElement)
        
        console.log("hehehe actualAmount",actualAmount)
        const webElement = await this.commonLocators.getWebElementByRole(page,'button', 'Place Order')
        await webElement.click()
        console.log("********** Finish clickWebElementPlaceOrder ********** \n")
    }

    async validateCheckoutPage(page){
        console.log("********** Start validateCheckoutPage ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,'button', 'Purchase')
        this.commonValidators.validateWebElementToBeVisible(webElement);
        console.log("********** Finish validateCheckoutPage ********** \n")
    }

    async enterCheckoutDetails(page){
        console.log("********** Start enterCheckoutDetails ********** \n")
        const nameElement = await this.commonLocators.getWebElementByLabel(page,`Total: ${actualAmount}`)
        await this.commonLocators.inputTextForWebElement(nameElement,"test")
       
        const countryElement = await this.commonLocators.getWebElementByLabel(page,`Country:`)
        await this.commonLocators.inputTextForWebElement(countryElement,"test")

        const cityElement = await this.commonLocators.getWebElementByLabel(page,`City:`)
        await this.commonLocators.inputTextForWebElement(cityElement,"test")

        const ccElement = await this.commonLocators.getWebElementByLabel(page,`Credit card:`)
        await this.commonLocators.inputTextForWebElement(ccElement,"test")

        const monthElement = await this.commonLocators.getWebElementByLabel(page,`Month:`)
        await this.commonLocators.inputTextForWebElement(monthElement,"test")

        const yearElement = await this.commonLocators.getWebElementByLabel(page,`Year:`)
        await this.commonLocators.inputTextForWebElement(yearElement,"test")


        console.log("********** Finish enterCheckoutDetails ********** \n")
    }

    async clickPurchase(page){
        console.log("********** Start clickPurchase ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,'button', 'Purchase')
        this.commonValidators.validateWebElementToBeVisible(webElement);
        console.log("********** Finish clickPurchase ********** \n")
    }

    async validatePurchaseSuccessful(page){
        console.log("********** Start validatePurchaseSuccessful ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,'button', 'OK')
        this.commonValidators.validateWebElementToBeVisible(webElement);
        this.commonLocators.clickOnWebElement(webElement)
        console.log("********** Finish validatePurchaseSuccessful ********** \n")
    }
   
}

module.exports = CheckoutPage;
