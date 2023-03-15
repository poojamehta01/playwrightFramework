import { test, expect } from '@playwright/test';
import HomePage from '../../pageObjects/HomePage';
import ProductPage from '../../pageObjects/ProductPage';
import ScreenShotUtils from '../../utils/ScreenShotUtils';
const {PRODUCT} = require('../../constants/testConstants/productPageConstants');

test('click product, navigate to productPage and validate', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const screentShot = new ScreenShotUtils(page);

    await homePage.navigateToHomePageAndValidate(page);

    await productPage.clickWebElementProductOnHomePage(page,PRODUCT.SAMNSUNG.NAME);
    await productPage.validateProductPage(page,PRODUCT.SAMNSUNG.PATH);
    await productPage.clickWebElementAddProductToCart(page);
    await screentShot.takeScreenShot(page,testInfo,'addToCartCompleted')

});
