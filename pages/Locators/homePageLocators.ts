import { Page, Locator } from "@playwright/test";

export class HomePageLocators {

  readonly requestQuoteLink: Locator;

  constructor(page: Page) {

    this.requestQuoteLink = page
      .getByRole("link", { name: "Request Quote" })
      .nth(1);
  }
}
