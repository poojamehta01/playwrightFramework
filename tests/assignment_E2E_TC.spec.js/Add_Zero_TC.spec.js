// future scope : here we can check that if no prodcut added "Place order" is disabled on cartPage, right now its not working
// can be treated as bug

import { test } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CartPage from "../../pageObjects/CartPage";
import ScreenShotUtils from "../../utils/ScreenShotUtils";
import CheckoutPage from "../../pageObjects/CheckoutPage";
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productCategoryTestData.js");
const { SAMSUNG_GALAXY_S6 } = require("../../testData/productTestData.js");
// test("Don't add any product", async ({ page }, testInfo) => {
//     const homePage = new HomePage(page);
//     const productPage = new ProductPage(page);
//     const cartPage = new CartPage(page);
//     const checkoutPage = new CheckoutPage(page);
//     const screentShot = new ScreenShotUtils(page);

// }  