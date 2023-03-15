const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
const {PRODUCT_PAGE,DIALOG_MESSAGE, PRODUCT_NAME,BUTON_TEXT,ROLE_TYPE } = require('../constants/index');
class ProductPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)
        this.actualDialogMessage = 'Product Added';

    }
    
    
    async clickWebElementProductOnHomePage(page){
        console.log("********** Start clickWebElementProductOnHomePage ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.LINK, PRODUCT_NAME.SAMNSUNG)
        const checkContent = await this.commonLocators.getTextContentForWebElement(webElement)
        await webElement.click()
        console.log("********** Finish clickWebElementProductOnHomePage ********** \n")
    }
    async validateProductPage(page){
        console.log("********** Start validateProductPage ********** \n")
        this.currentUrl = page.url()
        this.commonValidators.validateWebElementToContainText(this.currentUrl, PRODUCT_PAGE)
        console.log("********** Finish validateProductPage ********** \n")
    }

    async clickWebElementAddProductToCart(page){
        console.log("********** Start clickWebElementAddProductToCart ********** \n")

        page.on('dialog', dialog => {
        dialog.accept()
        console.log("dialog message")
        console.log(dialog.message())
        this.commonValidators.validateWebElementToContainText(dialog.message(),DIALOG_MESSAGE)
        });
        const webElement = await this.commonLocators.getWebElementByRole(page,ROLE_TYPE.LINK, BUTON_TEXT.ADD_TO_CART)
        webElement.click()
        console.log("********** Finish clickWebElementAddProductToCart ********** \n")
    }
 
}


module.exports = ProductPage;
