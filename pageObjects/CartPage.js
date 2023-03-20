const { expect } = require("@playwright/test");
const commonLocators = require("../utils/CommonLocators");
const commonValidators = require("../utils/CommonValidators");
const HomePage = require("./HomePage");
const CommonValidators = require("../utils/CommonValidators");
const { amountLocator, tableLocator } = require("../testLocators/cartPage");

class CartPage {
  constructor(page, log) {
    this.page = page;
    this.log = log;
    this.commonLocators = new commonLocators(this.log);
    this.commonValidators = new commonValidators(this.log);
    this.homePage = new HomePage(page);
  }

  async validateProductOnCartPage(page) {
    console.log("********** Start validateProductOnCartPage ********** \n");
    const tableElement = await this.commonLocators.getWebElementByLocator(
      page,
      tableLocator
    );
    this.commonValidators.validateWebElementCount(tableElement, 1);
    console.log("********** Finish validateProductOnCartPage ********** \n");
  }

  async placeOrder(page, item) {
    console.log("********** Start placeOrder ********** \n");
    const amountWebElement = await page.locator(amountLocator).first();
    await this.commonValidators.validateWebElementCount(amountWebElement, 1);
    actualAmount = await this.commonLocators.getTextContentForWebElement(
      await amountWebElement
    );
    const webElement = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.BUTTON,
      BUTON_TEXT.PLACE_ORDER
    );
    await webElement.click();
    console.log("********** Finish placeOrder ********** \n");
  }
}

module.exports = CartPage;
