import { Page, Locator } from "@playwright/test";

export class RequestPageLocators {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly company: Locator;
  readonly industry: Locator;
  readonly timeline: Locator;
  readonly monthlyVolume: Locator;
  readonly projectDetails: Locator;
  readonly submitBtn: Locator;
  readonly checkboxWS: Locator;
  readonly checkboxVAS: Locator;
  readonly checkboxMS: Locator;
  readonly checkboxTD: Locator;
  readonly checkboxSCM: Locator;
  readonly technologyIntegration: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.getByRole("textbox", { name: "First Name *" });
    this.lastName = page.getByRole("textbox", { name: "Last Name *" });
    this.email = page.getByRole("textbox", { name: "Email Address *" });
    this.phone = page.getByRole("textbox", { name: "Phone Number *" });
    this.company = page.getByRole("textbox", { name: "Company Name *" });

    this.industry = page.getByLabel("Industry *");

    this.checkboxWS = page.getByRole("checkbox", {
      name: "Warehousing & Storage",
    });
    this.checkboxVAS = page.getByRole("checkbox", {
      name: "Value-Added Services",
    });
    this.checkboxMS = page.getByRole("checkbox", {
      name: "Manufacturing Services",
    });
    this.checkboxTD = page.getByRole("checkbox", {
      name: "Transportation & Distribution",
    });
    this.checkboxSCM = page.getByRole("checkbox", {
      name: "Supply Chain Management",
    });

    this.technologyIntegration = page
      .locator("div")
      .filter({ hasText: /^Technology Integration$/ });

    this.timeline = page.getByLabel("Timeline *");
    this.monthlyVolume = page.getByRole("textbox", {
      name: "Estimated Monthly Volume",
    });
    this.projectDetails = page.getByRole("textbox", {
      name: "Project Details *",
    });
    this.submitBtn = page.getByRole("button", { name: "Submit Request" });
  }
}
