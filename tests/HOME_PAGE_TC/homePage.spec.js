import { test } from "@playwright/test";
import HomePage from "../../pageObjects/HomePage";
const { PHONE,LAPTOP,MONITORS } = require("../../testData/productCategoryTestData.js");
const { SAMSUNG_GALAXY_S6 } = require("../../testData/productTestData.js");


test("Validate home page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToHomePage(page);
  
  await homePage.goToCategoryOnHomePage(page,PHONE)
  await homePage.validateTitleLogoOnHomePage(page, SAMSUNG_GALAXY_S6);
  await homePage.validateProductOnHomePage(page,SAMSUNG_GALAXY_S6);
  await homePage.clickProductOnHomePage(page,SAMSUNG_GALAXY_S6);

});
