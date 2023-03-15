import { test, expect } from '@playwright/test';
import HomePage from '../../pageObjects/HomePage';
import ProductPage from '../../pageObjects/ProductPage';
import CartPage from '../../pageObjects/CartPage';
import CheckoutPage from '../../pageObjects/CheckoutPage';
import ScreenShotUtils from '../../utils/ScreenShotUtils';
//import PRODUCT_NAME from '../constants/index'
const {PRODUCT} = require('../../constants/commonConstant');

test('Add one Product', async ({ page },testInfo) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const screentShot = new ScreenShotUtils(page);

    await homePage.navigateToHomePageAndValidate(page);

    await productPage.clickWebElementProductOnHomePage(page,PRODUCT.SAMNSUNG.NAME);
    await productPage.validateProductPage(page,PRODUCT.SAMNSUNG.PATH);
    await productPage.clickWebElementAddProductToCart(page);
    await screentShot.takeScreenShot(page,testInfo,'addToCartCompleted')

    await cartPage.clickWebElementCartPage(page);
    await cartPage.validateProductOnCartPage(page);
    await screentShot.takeScreenShot(page,testInfo,'cartPage')

    await checkoutPage.clickWebElementPlaceOrder(page,1);
    await checkoutPage.validateCheckoutPage(page);
    await checkoutPage.enterMandatoryCheckoutDetails(page);
    
    await checkoutPage.clickPurchase(page);
    await screentShot.takeScreenShot(page,testInfo,'checkoutPage')
    await checkoutPage.validatePurchaseSuccessful(page)
    await screentShot.takeScreenShot(page,testInfo,'purchaseSuccess')


});



