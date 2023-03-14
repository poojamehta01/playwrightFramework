import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Click the get started link.
  await page.locator(`//a[contains(text(),'Cart')]`).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveTitle(/STORE/);
});