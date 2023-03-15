const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
const {MESSAGE,BUTON_TEXT,ROLE_TYPE } = require('../constants/commonConstant');
const actualDialogMessage ="";
class ProductPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)
        this.actualDialogMessage = 'Product Added';

    }
    
    
    async clickWebElementProductOnHomePage(page,productName){
        console.log("********** Start clickWebElementProductOnHomePage ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.LINK, productName)
        const checkContent = await this.commonLocators.getTextContentForWebElement(webElement)
        await webElement.click()
        console.log("********** Finish clickWebElementProductOnHomePage ********** \n")
    }
    async validateProductPage(page,productPath){
        console.log("********** Start validateProductPage ********** \n")
        this.currentUrl = page.url()
        this.commonValidators.validateWebElementToContainText(this.currentUrl, productPath)
        console.log("********** Finish validateProductPage ********** \n")
    }

    async clickWebElementAddProductToCart(page){
        console.log("********** Start clickWebElementAddProductToCart ********** \n")

        page.once('dialog', dialog => {
        dialog.accept()
        console.log("dialog message")
        console.log(dialog.message())
        this.commonValidators.validateWebElementToContainText(dialog.message(),MESSAGE.DIALOG_MESSAGE)
 
        });
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.LINK, BUTON_TEXT.ADD_TO_CART)

        webElement.click()
        console.log("********** Finish clickWebElementAddProductToCart ********** \n")
    }
 
}


module.exports = ProductPage;
