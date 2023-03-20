import { test } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productTestData");


test("navigate to homePage and validate", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToHomePage(page);
  await homePage.validateTitleLogoOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page,PHONE.SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page, PHONE.SAMSUNG_GALAXY_S6);

});
