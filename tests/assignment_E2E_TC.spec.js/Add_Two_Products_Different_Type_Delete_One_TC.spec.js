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

    // ● Add any 2 products to the cart.
  await homePage.goToHomePage(page);
  await homePage.goToCategoryOnHomePage(page,PHONE)
  await homePage.validateTitleLogoOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page, SAMSUNG_GALAXY_S6);

  await productPage.validateProductOnProductPage(page, SAMSUNG_GALAXY_S6);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");

    // ● Go to the cart view and verify if the products are available.
  await cartPage.validateProductOnCartPage(page, SAMSUNG_GALAXY_S6);

  await homePage.goToHomePage(page);
  await homePage.goToCategoryOnHomePage(page,LAPTOP)
  await homePage.validateTitleLogoOnHomePage(page, MACBOOK_AIR);
  await homePage.validateProductOnHomePage(page, MACBOOK_AIR);
  await homePage.clickProductOnHomePage(page, MACBOOK_AIR);

  await productPage.validateProductOnProductPage(page, MACBOOK_AIR);
  await productPage.AddProductToCart(page);
  await screentShot.takeScreenShot(page, testInfo, "addToCartCompleted");
  
  await cartPage.validateProductOnCartPage(page, MACBOOK_AIR);
     // ● Delete the 2nd item from the cart
  await cartPage.deleteProductandVerify(page,MACBOOK_AIR);
  test.slow()
  await cartPage.placeOrder(page);
  await screentShot.takeScreenShot(page, testInfo, "cartPage");
  await checkoutPage.checkProductAddedOnCheckOutPage(page);

  // ● Place the order by entering the details.
  await checkoutPage.enterMandatoryCheckoutDetails(page);
  await checkoutPage.enterOptionCheckoutDetails(page);

  await checkoutPage.makePurchase(page);
  await screentShot.takeScreenShot(page, testInfo, "purchaseSuccess");
  // ● Check if the order is placed correctly.

  await checkoutPage.validatePurchaseIfSuccessful(page);
 
});
