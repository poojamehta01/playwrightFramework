import { test } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CartPage from "../../pageObjects/CartPage";
import ScreenShotUtils from "../../utils/ScreenShotUtils";
import CheckoutPage from "../../pageObjects/CheckoutPage";
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productCategoryTestData.js");
const { SAMSUNG_GALAXY_S6,MACBOOK_AIR } = require("../../testData/productTestData.js");

test("Add two different products of different category and delete the second added product", async ({ page }, testInfo) => {
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

  await cartPage.validateProductOnCartPage(page, SAMSUNG_GALAXY_S6);


  // add product to cart twice

  await homePage.goToHomePage(page);
  await homePage.goToCategoryOnHomePage(page,LAPTOP)
  await homePage.validateTitleLogoOnHomePage(page, MACBOOK_AIR);
  await homePage.validateProductOnHomePage(page, MACBOOK_AIR);
  await homePage.clickProductOnHomePage(page, MACBOOK_AIR);

  await productPage.validateProductOnProductPage(page, MACBOOK_AIR);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");

  await cartPage.validateProductOnCartPage(page, MACBOOK_AIR);
  // delete extra added product
  await cartPage.deleteProductandVerify(page,MACBOOK_AIR);
  test.slow()
  await cartPage.placeOrder(page);
  await screentShot.takeScreenShot(page, testInfo, "cartPage");
  await checkoutPage.checkProductAddedOnCheckOutPage(page);


  await checkoutPage.enterMandatoryCheckoutDetails(page);
  await checkoutPage.enterOptionCheckoutDetails(page);

 await checkoutPage.makePurchase(page);
  await screentShot.takeScreenShot(page, testInfo, "purchaseSuccess");
  await checkoutPage.validatePurchaseIfSuccessful(page);
 
});
