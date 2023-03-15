import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Nokia lumia 1520' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('row', { name: 'Nokia lumia 1520 820 Delete' }).getByRole('link', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total: 720').click();
  await page.getByLabel('Total: 720').fill('test');
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
  await page.getByRole('link', { name: 'Cart' }).click();
});