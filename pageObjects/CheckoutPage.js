const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
const {BUTON_TEXT,ROLE_TYPE,LABEL, ADD_ORDER_DETAILS, MESSAGE } = require('../constants/index');
let actualAmount = ""
class CheckoutPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)

      }
    
    async clickWebElementPlaceOrder(page,item){
        console.log("********** Start clickWebElementPlaceOrder ********** \n")
        
        const amountWebElement = await page.locator(`//h3[@id='totalp']`).first();
        await this.commonValidators.validateWebElementCount(amountWebElement,1)
        actualAmount = await this.commonLocators.getTextContentForWebElement(await amountWebElement)
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.BUTTON,BUTON_TEXT.PLACE_ORDER)
        await webElement.click()
        console.log("********** Finish clickWebElementPlaceOrder ********** \n")
    }

    async validateCheckoutPage(page){
        console.log("********** Start validateCheckoutPage ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.BUTTON, BUTON_TEXT.PURCHASE)
        this.commonValidators.validateWebElementToBeVisible(webElement);
        console.log("********** Finish validateCheckoutPage ********** \n")
    }

    async enterMandatoryCheckoutDetails(page){
        console.log("********** Start enterMandatoryCheckoutDetails ********** \n")
        const nameElement = await this.commonLocators.getWebElementByLabel(page,`Total: ${actualAmount}`)
        //const nameElement = await this.commonLocators.getWebElementByLabel(page, LABEL.NAME)
        await this.commonLocators.inputTextForWebElement(nameElement,ADD_ORDER_DETAILS.NAME)
       
        const ccElement = await this.commonLocators.getWebElementByLabel(page,LABEL.CREDIT_CARD)
        await this.commonLocators.inputTextForWebElement(ccElement,ADD_ORDER_DETAILS.CREDIT_CARD)

        console.log("********** Finish enterMandatoryCheckoutDetails ********** \n")
    }

    async enterOptionCheckoutDetails(page){
        console.log("********** Start enterMandatoryCheckoutDetails ********** \n")
       
        const countryElement = await this.commonLocators.getWebElementByLabel(page,LABEL.COUNTRY)
        await this.commonLocators.inputTextForWebElement(countryElement,ADD_ORDER_DETAILS.COUNTRY)

        const cityElement = await this.commonLocators.getWebElementByLabel(page,LABEL.CITY)
        await this.commonLocators.inputTextForWebElement(cityElement,ADD_ORDER_DETAILS.CITY)

        const monthElement = await this.commonLocators.getWebElementByLabel(page,LABEL.MONTH)
        await this.commonLocators.inputTextForWebElement(monthElement,ADD_ORDER_DETAILS.MONTH)

        const yearElement = await this.commonLocators.getWebElementByLabel(page, LABEL.YEAR)
        await this.commonLocators.inputTextForWebElement(yearElement,ADD_ORDER_DETAILS.YEAR)


        console.log("********** Finish enterMandatoryCheckoutDetails ********** \n")

    }
    
    async clickPurchase(page){
        console.log("********** Start clickPurchase ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.BUTTON, BUTON_TEXT.PURCHASE)
        this.commonValidators.validateWebElementToBeVisible(webElement);
        webElement.click()
        console.log("********** Finish clickPurchase ********** \n")
    }

    async validatePurchaseSuccessful(page){
        console.log("********** Start validatePurchaseSuccessful ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.BUTTON, BUTON_TEXT.OK)
        this.commonValidators.validateWebElementToBeVisible(webElement);
        const successText = await page.locator("//h2[contains(text(),'Thank you for your purchase!')]").textContent()
        this.commonValidators.validateWebElementToContainText(successText,MESSAGE.SUCCESS_MESSAGE)
        webElement.click();
        console.log("********** Finish validatePurchaseSuccessful ********** \n")
    }
   
}

module.exports = CheckoutPage;
