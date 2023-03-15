import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';
import CartPage from '../pageObjects/CartPage';
import CheckoutPage from '../pageObjects/CheckoutPage';
import ScreenShotUtils from '../utils/ScreenShotUtils';

test('click placeOrder and navigate to checkOutPage', async ({ page },testInfo) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const screentShot = new ScreenShotUtils(page);

    await homePage.navigateToHomePageAndValidate(page);
    await productPage.clickWebElementProductOnHomePage(page);
    await productPage.validateProductPage(page);
    await productPage.clickWebElementAddProductToCart(page);
    await screentShot.takeScreenShot(page,testInfo,'addToCartCompleted')
    await cartPage.clickWebElementCartPage(page);
    await cartPage.validateProductOnCartPage(page);
    await screentShot.takeScreenShot(page,testInfo,'cartPage')
    await checkoutPage.clickWebElementPlaceOrder(page);
    await checkoutPage.validateCheckoutPage(page);
    await checkoutPage.enterCheckoutDetails(page);
    await screentShot.takeScreenShot(page,testInfo,'checkoutPage')
  
});