import { test, expect } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import ScreenShotUtils from "../../utils/ScreenShotUtils";
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productCategoryTestData.js");
const { SAMSUNG_GALAXY_S6 } = require("../../testData/productTestData.js");

test("Validate product page", async ({
  page,
}, testInfo) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const screentShot = new ScreenShotUtils(page);

  await homePage.goToHomePage(page);
  await homePage.goToCategoryOnHomePage(page,PHONE)
  await homePage.validateTitleLogoOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page, SAMSUNG_GALAXY_S6);

  await productPage.validateProductOnProductPage(page, SAMSUNG_GALAXY_S6);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");
});
