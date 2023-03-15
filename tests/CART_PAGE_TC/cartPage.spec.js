import { test, expect } from '@playwright/test';
import HomePage from '../../pageObjects/HomePage';
import ProductPage from '../../pageObjects/ProductPage';
import CartPage from '../../pageObjects/CartPage';
import ScreenShotUtils from '../../utils/ScreenShotUtils';
const {PRODUCT} = require('../../constants/testConstants/productPageConstants');

test('click addToCart and navigate to cartPage', async ({ page },testInfo) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const screentShot = new ScreenShotUtils(page);

    await homePage.navigateToHomePageAndValidate(page);

    await productPage.clickWebElementProductOnHomePage(page,PRODUCT.SAMNSUNG.NAME);
    await productPage.validateProductPage(page,PRODUCT.SAMNSUNG.PATH);
    await productPage.clickWebElementAddProductToCart(page);
    await screentShot.takeScreenShot(page,testInfo,'addToCartCompleted')

    await cartPage.clickWebElementCartPage(page);
    await cartPage.validateProductOnCartPage(page);
    await screentShot.takeScreenShot(page,testInfo,'cartPage')
   
});
