import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';
import CartPage from '../pageObjects/CartPage';

test('click addToCart and navigate to cartPage', async ({ page },testInfo) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.navigateToHomePageAndValidate(page);
    await productPage.clickWebElementProductOnHomePage(page);
    await productPage.validateProductPage(page);
    await productPage.clickWebElementAddProductToCart(page);
    await page.screenshot({path:"screenshots/addToCartCompleted.png"})
    await testInfo.attach('addToCartCompleted', { body: await page.screenshot(), contentType: 'image/png' });
    await cartPage.clickWebElementCartPage(page);
    await cartPage.validateProductOnCartPage(page);
    await page.screenshot({path:"screenshots/cartPage.png"})
    await testInfo.attach('cartPage', { body: await page.screenshot(), contentType: 'image/png' });
   
});
