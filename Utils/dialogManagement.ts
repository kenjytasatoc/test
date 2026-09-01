import { expect, Page } from "@playwright/test";

export async function validateDialog(page: Page, expectedMessage: string) {
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toBe(expectedMessage);
    await dialog.accept();
  });
}
