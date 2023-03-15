import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';

test('click product, navigate to productPage and validate', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await homePage.navigateToHomePageAndValidate(page);
    await productPage.clickWebElementProductOnHomePage(page);
    await productPage.validateProductPage(page);

});

test('on productPage click addToCart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await homePage.navigateToHomePageAndValidate(page);
    await productPage.clickWebElementProductOnHomePage(page);
    await productPage.validateProductPage(page);
    await productPage.clickWebElementAddProductToCart(page);
  
});

test('validate product added by clicking on popup ok', async ({ page },testInfo) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await homePage.navigateToHomePageAndValidate(page);
    await productPage.clickWebElementProductOnHomePage(page);
    await productPage.validateProductPage(page);
    await productPage.addProductToCartAndValidate(page);
    await page.screenshot({path:"screenshots/addToCartCompleted.png"})
    await testInfo.attach('addToCartCompleted', { body: await page.screenshot(), contentType: 'image/png' });
    
});