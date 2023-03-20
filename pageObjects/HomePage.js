const { expect } = require("@playwright/test");
const {
  BASE_URL,
  TITLE,
} = require("../constants/testConstants/homePageConstants");
const productPageConstants = require("../constants/testConstants/productPageConstants");
const homePageLocators = require("../constants/testLocators/homePageLocators");

const CommonLocators = require("../utils/CommonLocators");
const CommonValidators = require("../utils/CommonValidators");
const CommonFunctions = require("../utils/CommonFunctions");
const { ROLE_TYPE } = require("../constants/testConstants/commonConstant");
class HomePage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator(`//a[@id='nava']`);
    this.commonLocators = new CommonLocators();
    this.commonValidators = new CommonValidators();
    this.commonFunctions = new CommonFunctions();
  }

  async goToHomePage(page) {
    console.log("********** Start goToHomePage ********** \n");
    await page.goto(BASE_URL);
    console.log("********** Finish goToHomePage ********** \n");
  }

  async validateTitleLogoOnHomePage(page, testDataTitle) {
    console.log(
      "********** Start validateTitleLogoProductDetails ********** \n"
    );
    await expect(page).toHaveTitle(TITLE);
    await expect(this.logo).toBeVisible();
    const item = this.commonFunctions.getItem(testDataTitle);
    console.log(item);
    await page.getByText(item.title);
    await this.commonLocators.getWebElementByRole(
      page,
      "heading",
      "$PRICE".replace("PRICE", item.price)
    );
    console.log(
      "********** Finish validateTitleLogoProductDetails ********** \n"
    );
  }

  async validateProductOnHomePage(page, testDataTitle) {
    console.log("********** Start clickProductOnHomePage ********** \n");

    const item = this.commonFunctions.getItem(testDataTitle);

    console.info("Verifying homePage-product-description");
    const productDescriptionWebElement =
      await this.commonLocators.getWebElementByText(page, item.desc);

    await expect(productDescriptionWebElement.isVisible()).toBeTruthy();

    console.info("Verifying homePage-product-image");
    const productImageWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
        item.img
      );
    await expect(productImageWebElement.isVisible()).toBeTruthy();

    console.info("Verifying homePage-product-price");
    const productPriceWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
        item.price
      );
    await expect(productPriceWebElement.isVisible()).toBeTruthy();

    console.info("Verifying homePage-product-title");
    const productTitleWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
        item.title
      );
    await expect(productTitleWebElement.isVisible()).toBeTruthy();
  }

  async clickProductOnHomePage(page, testDataTitle) {
    console.log("********** Start clickProductOnHomePage ********** \n");

    const item = await this.commonFunctions.getItem(testDataTitle);
    const productTitleWebElement =
      await this.commonLocators.getWebElementByRole(
        page,
        ROLE_TYPE.LINK,
        item.title
      );
    await expect(productTitleWebElement.isVisible()).toBeTruthy();
    await productTitleWebElement.click();
    console.log("********** Finish clickProductOnHomePage ********** \n");
  }
}

module.exports = HomePage;
