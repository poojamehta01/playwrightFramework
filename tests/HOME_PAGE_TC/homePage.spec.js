import { test } from '@playwright/test';
import HomePage from '../../pageObjects/HomePage';

test('navigate to homePage and validate', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePageAndValidate(page);
});
