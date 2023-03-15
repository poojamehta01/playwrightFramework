import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  console.log("hi")
  page.on('dialog', dialog => {
    console.log("hello")
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total: 360').click();
  await page.getByLabel('Total: 360').fill('test');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('test');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('test');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('test');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('test');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('test');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});