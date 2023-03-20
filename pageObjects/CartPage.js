const { expect } = require("@playwright/test");
const CommonLocators = require("../utils/CommonLocators");
const CommonValidators = require("../utils/CommonValidators");
const CommonFunctions = require("../utils/CommonFunctions");
const HomePage = require("./HomePage");
const cartPageLocators = require("../constants/testLocators/cartPageLocators");
const { ROLE_TYPE,BUTTON_TEXT } = require("../constants/testConstants/commonConstants");

class CartPage {
  constructor(page, log) {
    this.page = page;
    this.log = log;
    this.commonLocators = new CommonLocators(this.log);
    this.commonValidators = new CommonValidators(this.log);
    this.commonFunctions = new CommonFunctions();
    this.homePage = new HomePage(page);
  }

  async validateProductOnCartPage(page, testDataTitle) {
    console.log("********** Start validateProductOnCartPage ********** \n");
    const expectedTableData = [];
    const item = this.commonFunctions.getItem(testDataTitle);
    console.log(item);
    expectedTableData.push(["", item.title, item.price.toString(), "Delete"]);
  
    const cartPageNav = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.LINK,
      "Cart"
    );
    cartPageNav.click();
    console.info("Verifying cartPage-productTable");

    const tableElement = await this.commonLocators.getWebElementByLocator(
      page,
      cartPageLocators.tableLocator
    );

    await expect(await tableElement.isVisible()).toBeTruthy();

    this.commonValidators.validateWebElementCount(tableElement, 1);

    console.log("Verifying table heading");
    await expect(
      await page.getByRole("cell", { name: "Pic" }).isVisible()
    ).toBeTruthy();
    await expect(
      await page.getByRole("cell", { name: "Title" }).isVisible()
    ).toBeTruthy();
    await expect(
      await page.getByRole("cell", { name: "Price" }).isVisible()
    ).toBeTruthy();
    await expect(
      await page.getByRole("cell", { name: "x", exact: true }).isVisible()
    ).toBeTruthy();

    console.log("Verfiying table data");
    const actualTableData = await page.$$eval(
      cartPageLocators.tableRowLocator,
      (rows) => {
        console.log("inside rows");
        const testRows = rows.map((row) => {
          console.log("inside row");
          const cells = row.querySelectorAll("td");
          console.log("this is cells");
          console.log(cells);
          const testArray = Array.from(cells).map((cell) => cell.textContent);
          console.log(testArray);
          return testArray;
        });
        console.log(testRows);
        return testRows;
      }
    );
    console.log("this is actualTableData");
    console.log(actualTableData);
   

    actualTableData.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
         expect(cell).toContain(expectedTableData[rowIndex][cellIndex]);
      });
    });

    console.log("Verifying total amount");
    let expectedTotalAmount = 0;
    const actualtotalAmount = await page.$eval(
      cartPageLocators.amountLocator,
      (el) => el.textContent
    );
    actualTableData.forEach((innerArray) => {
      expectedTotalAmount += innerArray[2];
    });

    await this.commonValidators.validateWebElementToContainText(
        expectedTotalAmount,
        actualtotalAmount
      )
    ;

    console.log("********** Finish validateProductOnCartPage ********** \n");
  }

  async deleteProductandVerify(page, location) {
    console.log("********** Start deleteOrder ********** \n");
    const deleteProductElement =
      await this.commonLocators.getWebElementByLocator(
        page,
        cartPageLocators.deleteLocator.replace("$ID", location.toString())
      );
    await deleteProductElement.click()

    // Verify product Deleted successfully
    expected(await deleteProductElement.isVisible().toBeFalsy());
    console.log("********** Finish placeOrder ********** \n");
  }

  async placeOrder(page) {
    console.log("********** Start placeOrder ********** \n");
  
    const webElement = await this.commonLocators.getWebElementByRole(
      page,
      ROLE_TYPE.BUTTON,
      BUTTON_TEXT.PLACE_ORDER
    );
    await webElement.click();
    console.log("********** Finish placeOrder ********** \n");
  }
}

module.exports = CartPage;
