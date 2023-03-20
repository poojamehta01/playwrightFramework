const playwrightExpect = require("@playwright/test").expect;

class CommonValidators {
  constructor(log, parameters) {
    (this.log = log), (this.parameters = parameters);
  }

  async validateWebElementToContainText(actualValue, expectedToContainText) {
    console.log(
      `********** Start validateWebElementToContainText ********** \n`
    );
    console.log(
      `Validating Text ${actualValue} Retrieved from WebElement To Have Text ${expectedToContainText}`
    );
    playwrightExpect(actualValue).toContain(expectedToContainText);
    console.log(
      `********** Finish validateWebElementToContainText ********** \n`
    );
  }

  async validateWebElementToBeVisible(webElement) {
    console.log(`********** Start validateWebElementToBeVisible ********** \n`);
    console.log(`Checking for ${webElement}`);
    console.log(`Validating if ${webElement} is visible`);
    await playwrightExpect(webElement).toBeVisible();
    console.log(
      `********** Finish  validateWebElementToBeVisible ********** \n`
    );
  }

  async validateWebElementCount(webElement, count) {
    console.log(`********** Start validateWebElementCount ********** \n`);
    console.log(`Checking for ${webElement}`);
    await playwrightExpect(webElement).toHaveCount(count);
    console.log(`********** Finish  validateWebElementCount ********** \n`);
  }
}

module.exports = CommonValidators;
