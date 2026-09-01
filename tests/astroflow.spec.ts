import { test, expect } from "@playwright/test";
import { validateDialog } from "../Utils/dialogManagement";
import { requestQuoteData } from "../Utils/test-data";
import { HomePage } from "../pages/HomePage";
import { RequestPage } from "../pages/RequestPage";

test("Request a quote", async ({ page }) => {
  const homePage = new HomePage(page);
  const requestPage = new RequestPage(page);

  await homePage.goto();
  await homePage.openRequestQuote();
  await requestPage.fillFirstName(requestQuoteData.firstName);
  await requestPage.fillLastName(requestQuoteData.lastName);
  await requestPage.fillEmail(requestQuoteData.email);
  await requestPage.fillPhone(requestQuoteData.phone);
  await requestPage.fillCompany(requestQuoteData.company);
  await requestPage.selectIndustry(requestQuoteData.industryEcommerce);
  await requestPage.selectWarehousing();
  await requestPage.selectManufacturing();
  await requestPage.selectTransportation();
  await requestPage.selectValueAddedServices();
  await requestPage.selectTechnologyIntegration();
  await requestPage.selectSupplyChain();
  await requestPage.selectTimeLine(requestQuoteData.timeline);
  await requestPage.fillMontlyVolume(requestQuoteData.monthlyVolume);
  await requestPage.fillProjectDetails(requestQuoteData.projectDetails);
  await validateDialog(page, requestQuoteData.expectedMessage);
  await requestPage.submitRequest();
});
