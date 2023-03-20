import { test } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CartPage from "../../pageObjects/CartPage";
import ScreenShotUtils from "../../utils/ScreenShotUtils";
import CheckoutPage from "../../pageObjects/CheckoutPage";
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productCategoryTestData.js");
const { SAMSUNG_GALAXY_S6 } = require("../../testData/productTestData.js");

test("Add one Product", async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const screentShot = new ScreenShotUtils(page);

  await homePage.goToHomePage(page);
  await homePage.goToCategoryOnHomePage(page,PHONE)
  await homePage.validateTitleLogoOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page, SAMSUNG_GALAXY_S6);

  await productPage.validateProductOnProductPage(page, SAMSUNG_GALAXY_S6);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");

  await cartPage.validateProductOnCartPage(page,SAMSUNG_GALAXY_S6);
  await cartPage.placeOrder(page)
  await screentShot.takeScreenShot(page, testInfo, "cartPage");

  await checkoutPage.checkProductAddedOnCheckOutPage(page);
  await checkoutPage.enterMandatoryCheckoutDetails(page);

  await checkoutPage.makePurchase(page);
  await screentShot.takeScreenShot(page, testInfo, "checkoutPage");
  await checkoutPage.validatePurchaseIfSuccessful(page);
  await screentShot.takeScreenShot(page, testInfo, "purchaseSuccess");
});
