const { expect } = require("@playwright/test");
const commonLocators = require('../utils/CommonLocators')
const commonValidators = require('../utils/CommonValidators')
class ProductPage{
    constructor(page,log) {
        this.page = page
        this.log = log
        this.commonLocators = new commonLocators(this.log)
        this.commonValidators = new commonValidators(this.log)
        this.product = page.locator(`//*[contains(text(),'Samsung galaxy s6')]`);
        this.addToCart = page.locator(`//*[contains(text(),'Add to cart')]`);
        this.actualPageUrl = 'https://www.demoblaze.com/prod.html?idp_=1';
        this.actualDialogMessage = 'Product Added';
    }
    
    
    async clickWebElementProductOnHomePage(page){
        console.log("********** start clickWebElementProductOnHomePage ********** \n")
        // const webElement = await this.commonLocators.getWebElementByRole(page,'link', 'Samsung galaxy s6',true)
        const webElement = await this.commonLocators.getWebElementByRole(page,'link', 'Samsung galaxy s6')
        await webElement.click()
        console.log("********** finish clickWebElementProductOnHomePage ********** \n")
    }
    async validateProductPage(page){
        console.log("********** start validateProductPage ********** \n")
        this.currentUrl = page.url()
        await expect(this.product).toBeVisible(); 
        await expect(this.addToCart).toBeEnabled();
        this.commonValidators.validateWebElementToContainText(this.currentUrl, this.actualPageUrl)
        console.log("********** finish validateProductPage ********** \n")
    }

    async clickWebElementAddProductToCart(page){
        console.log("********** start clickWebElementAddProductToCart ********** \n")
        // const webElement = await this.commonLocators.getWebElementByRole(page,'link', 'Add to cart',true)

        // page.once('dialog', dialog => {
        //     console.log("********** start dialog ********** \n")
        //     console.log(`Dialog message: ${dialog.message()}`);
        //     dialog.dismiss().catch(() => {});
        //     console.log("********** finish dialog ********** \n")
        //   });

        page.on('dialog', dialog => {
        console.log("accepting start")
        dialog.accept()
        console.log("dialog message")
        console.log(dialog.message())
        });
        const webElement = await this.commonLocators.getWebElementByRole(page,'link', 'Add to cart')
        await webElement.click()
        console.log("********** finish clickWebElementAddProductToCart ********** \n")
    }

    // async addProductToCartAndValidate(page){
    //     console.log("********** start addProductToCartAndValidate ********** \n")
    //     // page.on('dialog', dialog => {
    //     //     console.log("accepting start")
    //     //     dialog.accept()
    //     //     console.log("dialog message")
    //     //     console.log(dialog.message())
    //     // });

    //     // page.once('dialog', dialog => {
    //     //     console.log("Start dialog")
    //     //     console.log(`Dialog message: ${dialog.message()}`);
    //     //     dialog.dismiss().catch(() => {});
    //     //     console.log("Finish dialog")
    //     //   });
    
    //     // await this.clickWebElementAddProductToCart(page); 
    
      
    //     console.log("********** finish addProductToCartAndValidate ********** \n")  
         
    // }
 
}


module.exports = ProductPage;
