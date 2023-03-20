import { test, expect } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import ScreenShotUtils from "../../utils/ScreenShotUtils";
const { PHONE, LAPTOP, MONITORS } = require("../../testData/productTestData");

test("click product, navigate to productPage and validate", async ({
  page,
}, testInfo) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const screentShot = new ScreenShotUtils(page);

  await homePage.goToHomePage(page);
  await homePage.validateTitleLogoOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);

  await productPage.validateProductOnProductPage(page, PHONE.SAMSUNG_GALAXY_S6);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");
});
