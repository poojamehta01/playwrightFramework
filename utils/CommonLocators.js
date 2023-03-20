const commonValidators = require("../utils/CommonValidators");
class CommonLocators {
  constructor(log) {
    this.log = log;
    this.commonValidators = new commonValidators(this.log);
  }

  async getWebElementByRole(page, type, locatorName) {
    console.log(`********** Start getWebElementByRole **********\n`);
    console.log(
      `Getting WebElement with type : ${type}, LocatorName : ${locatorName}`
    );
    console.log(`********** Finish getWebElementByRole **********\n`);
    //this.commonValidators.validateWebElementToBeVisible(page.getByRole(type, { name: locatorName}))
    return await page.getByRole(type, { name: locatorName });
  }

  async clickOnWebElement(page, locator) {
    console.log(`********** Start clickOnWebElement ********** \n`);
    console.log(`Click On WebElement having locator identifier as ${locator}`);
    //this.commonValidators.validateWebElementToBeVisible(page.locator(`${locator}`))
    await page.locator(`${locator}`).click();
    console.log(`********** Finish clickOnWebElement ********** \n`);
  }

  async getWebElementByPlaceholder(page, placeHolderName) {
    console.log(`********** Start getWebElementByPlaceholder ********** \n`);
    console.log(`Getting WebElement with PlaceHolderName : ${placeHolderName}`);
    console.log(`********** Finish getWebElementByPlaceholder **********  \n`);
    this.commonValidators.validateWebElementToBeVisible(
      page.getByPlaceholder(placeHolderName)
    );
    return await page.getByPlaceholder(placeHolderName);
  }

  async getWebElementByXPathBasedOnTagNameValue(
    page,
    tagName,
    LocatorName,
    LocatorValue
  ) {
    console.log(
      `********** Start getWebElementByXPathBasedOnTagNameValue  **********\n`
    );
    console.log(
      `Getting WebElement Having tagName : ${tagName},LocatorName : ${LocatorName},LocatorValue: ${LocatorValue}`
    );
    console.log(
      `********** Finish getWebElementByXPathBasedOnTagNameValue ********** \n`
    );
    this.commonValidators.validateWebElementToBeVisible(
      page.locator(
        `//${tagName}[contains(@${LocatorName}, \'${LocatorValue}\')]`
      )
    );
    return await page.locator(
      `//${tagName}[contains(@${LocatorName}, \'${LocatorValue}\')]`
    );
  }

  async getWebElementByLabel(page, label) {
    console.log(`********** Start getWebElementByLabel ********** \n`);
    console.log(`Getting WebElement Having label : ${label}`);
    console.log(`********** Finish getWebElementByLabel ********** \n`);
    return await page.getByLabel(label);
  }

  async inputTextForWebElement(webElement, inputText) {
    console.log(`********** Start inputTextForWebElement ********** \n`);
    console.log(
      `Input WebElement : ${webElement} With Text Input as ${inputText}`
    );
    //this.commonValidators.validateWebElementToBeVisible(webElement)
    await webElement.fill(inputText);
    console.log(`********** Finish inputTextForWebElement ********** \n`);
  }

  async getTextContentForWebElement(webElement) {
    console.log(`Getting textContent for the WebElement : ${webElement}`);
    this.commonValidators.validateWebElementToBeVisible(webElement);
    const textContent = await webElement.textContent();
    console.log(`The Text Content is : ${textContent}`);
    console.log(`********** Finish getTextContentForWebElement ********** \n`);
    return await textContent;
  }

  async getWebElementByText(page, text) {
    console.log(`********** Start getWebElementByText ********** \n`);
    console.log(`Getting WebElement Having text : ${text}`);
    console.log(`********** Finish getWebElementByText ********** \n`);
    return await page.getByText(text);
  }

  async getWebElementByLocator(page, locator) {
    console.log(`********** Start getWebElementByLocator ********** \n`);
    console.log(`Getting WebElement Having locator : ${locator}`);
    console.log(`********** Finish getWebElementByLocator ********** \n`);
    return await page.locator(locator);
  }
}

module.exports = CommonLocators;
