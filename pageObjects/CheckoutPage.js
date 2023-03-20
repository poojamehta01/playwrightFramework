const { expect } = require("@playwright/test");
const commonLocators = require("../utils/CommonLocators");
const commonValidators = require("../utils/CommonValidators");
const {
  BUTTON_TEXT,
  ROLE_TYPE,
  MESSAGE,
} = require("../constants/testConstants/commonConstants");
const {
  LABEL,
  ADD_ORDER_DETAILS,
} = require("../constants/testConstants/checkoutPageConstants");
const cartPageLocators = require("../constants/testLocators/cartPageLocators");

let actualAmount = "";
class CheckoutPage {
  constructor(page, log) {
    this.page = page;
    this.log = log;
    this.commonLocators = new commonLocators(this.log);
    this.commonValidators = new commonValidators(this.log);
  }

  async checkProductAddedOnCheckOutPage(page) {
    console.log(
      "********** Start checkProductAddedOnCheckOutPage ********** \n"
    );
    const webElement = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.BUTTON,
      BUTTON_TEXT.PURCHASE
    );
    this.commonValidators.validateWebElementToBeVisible(webElement);
    console.log(
      "********** Finish checkProductAddedOnCheckOutPage ********** \n"
    );
  }

  async enterMandatoryCheckoutDetails(page) {
    console.log("********** Start enterMandatoryCheckoutDetails ********** \n");
    const nameElement = await this.commonLocators.getWebElementByLabel(
      page,
      `Total: ${actualAmount}`
    );
    //const nameElement = await this.commonLocators.getWebElementByLabel(page, LABEL.NAME)
    await this.commonLocators.inputTextForWebElement(
      nameElement,
      ADD_ORDER_DETAILS.NAME
    );
    const ccElement = await this.commonLocators.getWebElementByLabel(
      page,
      LABEL.CREDIT_CARD
    );
    await this.commonLocators.inputTextForWebElement(
      ccElement,
      ADD_ORDER_DETAILS.CREDIT_CARD
    );
    console.log(
      "********** Finish enterMandatoryCheckoutDetails ********** \n"
    );
  }

  async enterOptionCheckoutDetails(page) {
    console.log("********** Start enterMandatoryCheckoutDetails ********** \n");

    const countryElement = await this.commonLocators.getWebElementByLabel(
      page,
      LABEL.COUNTRY
    );
    await this.commonLocators.inputTextForWebElement(
      countryElement,
      ADD_ORDER_DETAILS.COUNTRY
    );

    const cityElement = await this.commonLocators.getWebElementByLabel(
      page,
      LABEL.CITY
    );
    await this.commonLocators.inputTextForWebElement(
      cityElement,
      ADD_ORDER_DETAILS.CITY
    );

    const monthElement = await this.commonLocators.getWebElementByLabel(
      page,
      LABEL.MONTH
    );
    await this.commonLocators.inputTextForWebElement(
      monthElement,
      ADD_ORDER_DETAILS.MONTH
    );

    const yearElement = await this.commonLocators.getWebElementByLabel(
      page,
      LABEL.YEAR
    );
    await this.commonLocators.inputTextForWebElement(
      yearElement,
      ADD_ORDER_DETAILS.YEAR
    );
    console.log(
      "********** Finish enterMandatoryCheckoutDetails ********** \n"
    );
  }

  async makePurchase(page) {
    console.log("********** Start makePurchase ********** \n");
    const webElement = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.BUTTON,
      BUTTON_TEXT.PURCHASE
    );
    this.commonValidators.validateWebElementToBeVisible(webElement);
    webElement.click();
    console.log("********** Finish makePurchase ********** \n");
  }

  async validatePurchaseIfSuccessful(page) {
    console.log("********** Start validatePurchaseIfSuccessful ********** \n");
    const webElement = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.BUTTON,
      BUTTON_TEXT.OK
    );
    this.commonValidators.validateWebElementToBeVisible(webElement);
    const successText = await page
      .locator("//h2[contains(text(),'Thank you for your purchase!')]")
      .textContent();
    this.commonValidators.validateWebElementToContainText(
      successText,
      MESSAGE.SUCCESS_MESSAGE
    );
    await webElement.click();
    console.log("********** Finish validatePurchaseIfSuccessful ********** \n");

    // Future scope : add validation for prod
    // Verify cartPage is empty
    const cartPageNav = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.LINK,
      "Cart"
    );
    cartPageNav.click();
    const tableElement = await this.commonLocators.getWebElementByLocator(
      page,
      cartPageLocators.tableLocator
    );

    await expect(await tableElement.isVisible()).toBeFalsy();
  }
}

module.exports = CheckoutPage;
