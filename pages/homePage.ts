import { Page } from "@playwright/test";
import { BasePage } from './basePage';
import { HomePageLocators } from "./Locators/HomePageLocators";


export class HomePage extends BasePage {

readonly locators : HomePageLocators;

constructor (page : Page)
{super(page);
    this.locators=new HomePageLocators(page);

}
async openRequestQuote()
{ 
    await this.locators.requestQuoteLink.click();
}

}