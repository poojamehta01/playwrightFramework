const { expect } = require("@playwright/test");
const CommonLocators = require("../utils/CommonLocators");
const CommonValidators = require("../utils/CommonValidators");
const CommonFunctions = require("../utils/CommonFunctions");

const {
  MESSAGE,
  BUTTON_TEXT,
  ROLE_TYPE,
} = require("../constants/testConstants/commonConstants");
const actualDialogMessage = "";
const { PRODUCT_URL } = require("../constants/testConstants/homePageConstants");
class ProductPage {
  constructor(page, log) {
    this.page = page;
    this.log = log;
    this.commonLocators = new CommonLocators(this.log);
    this.commonValidators = new CommonValidators(this.log);
    this.commonFunctions = new CommonFunctions(this.log);
  }

  // Here we validate below product details
  // desc,image,price,title and url
  async validateProductOnProductPage(page, testDataTitle) {
    console.log("********** Start validateProductOProductPage ********** \n");
    this.currentUrl = page.url();
    const item = this.commonFunctions.getItem(testDataTitle);
    console.info("Verifying productPage-product-description");
    const productDescriptionWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
       item.desc
      );
      await expect(productDescriptionWebElement.isVisible()).toBeTruthy();


    console.info("Verifying productPage-product-image");
    const productImageWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
       item.img
      );
    await expect(productImageWebElement.isVisible()).toBeTruthy();


    console.info("Verifying productPage-product-price");
    const productPriceWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
       item.price
      );
    await expect(productPriceWebElement.isVisible()).toBeTruthy();


    console.info("Verifying productPage-product-title");
    const productTitleWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
       item.title
      );
    await expect(productTitleWebElement.isVisible()).toBeTruthy();


    console.info("Verifying productPage-url");
    this.commonValidators.validateWebElementToContainText(
      this.currentUrl,
      PRODUCT_URL.replace("$ID", item.id)
    );
    console.log("********** Finish validateProductOProductPage ********** \n");
  }

  async AddProductToCart(page) {
    console.log("********** Start AddProductToCart ********** \n");

    page.once("dialog", (dialog) => {
      dialog.accept();
      console.log("dialog message");
      console.log(dialog.message());
      this.commonValidators.validateWebElementToContainText(
        dialog.message(),
        MESSAGE.DIALOG_MESSAGE
      );
    });
    const webElement = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.LINK,
      BUTTON_TEXT.ADD_TO_CART
    );
    webElement.click();
    console.log("********** Finish AddProductToCart ********** \n");
  }
}

module.exports = ProductPage;
