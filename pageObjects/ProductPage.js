const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
class ProductPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)
        this.actualDialogMessage = 'Product Added';
        this.actualPageUrl = "https://www.demoblaze.com/prod.html?idp_=1"
    }
    
    
    async clickWebElementProductOnHomePage(page){
        console.log("********** Start clickWebElementProductOnHomePage ********** \n")
        const webElement = await this.commonLocators.getWebElementByRole(page,'link', 'Samsung galaxy s6')
        const checkContent = await this.commonLocators.getTextContentForWebElement(webElement)
        await webElement.click()
        console.log("********** Finish clickWebElementProductOnHomePage ********** \n")
    }
    async validateProductPage(page){
        console.log("********** Start validateProductPage ********** \n")
        this.currentUrl = page.url()
        this.commonValidators.validateWebElementToContainText(this.currentUrl, this.actualPageUrl)
        console.log("********** Finish validateProductPage ********** \n")
    }

    async clickWebElementAddProductToCart(page){
        console.log("********** Start clickWebElementAddProductToCart ********** \n")

        page.on('dialog', dialog => {
        dialog.accept()
        console.log("dialog message")
        console.log(dialog.message())
        });
        const webElement = await this.commonLocators.getWebElementByRole(page,'link', 'Add to cart')
        await webElement.click()
        console.log("********** Finish clickWebElementAddProductToCart ********** \n")
    }
 
}


module.exports = ProductPage;
