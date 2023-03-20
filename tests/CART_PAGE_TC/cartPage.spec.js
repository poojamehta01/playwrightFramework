import { test, expect } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CartPage from "../../pageObjects/CartPage";
import ScreenShotUtils from "../../utils/ScreenShotUtils";
import { PRODUCT_URL } from "../../constants/testConstants/homePageConstants";
const { Items } = require("../../constants/testConstants/productPageConstants");
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productTestData");

test("click addToCart and navigate to cartPage", async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const screentShot = new ScreenShotUtils(page);

  await homePage.goToHomePage(page);
  await homePage.validateTitleLogoOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);

  await productPage.validateProductOnProductPage(page, PHONE.SAMSUNG_GALAXY_S6);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");

  await cartPage.validateProductOnCartPage(page);
  await screentShot.takeScreenShot(page, testInfo, "cartPage");
});
