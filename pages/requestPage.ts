import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { RequestPageLocators } from "./Locators/RequestPageLocators";

export class RequestPage extends BasePage{

readonly locators: RequestPageLocators;

constructor(page: Page)
{
    super(page);
    this.locators = new RequestPageLocators(page);
}

async fillFirstName (firstName: string){
    await this.locators.firstName.fill(firstName);
}

async fillLastName (lastName: string){
    await this.locators.lastName.fill(lastName);
}

async fillEmail (email: string){
    await this.locators.email.fill(email);
}
async fillPhone (phone: string){
    await this.locators.phone.fill(phone);
}
async fillCompany (company: string){
    await this.locators.company.fill(company);
}
async selectIndustry (Industry: string){
    await this.locators.industry.selectOption(Industry);
}
async selectWarehousing  (){
    await this.locators.checkboxWS.click();
}

async selectManufacturing  (){
    await this.locators.checkboxMS.click();
}
async selectTransportation  (){
    await this.locators.checkboxTD.click();
}
async selectValueAddedServices  (){
    await this.locators.checkboxVAS.click();
}
async selectTechnologyIntegration (){
    await this.locators.technologyIntegration.click();
}
async selectSupplyChain (){
    await this.locators.checkboxSCM.click();
}
async selectTimeLine  (TimeLine: string){
    await this.locators.timeline.selectOption(TimeLine);
}
async fillMontlyVolume  (monthlyVolume: string){
    await this.locators.monthlyVolume.fill(monthlyVolume);
}
async fillProjectDetails (projectDetails: string){
    await this.locators.projectDetails.fill(projectDetails);
}
async submitRequest (){
    await this.locators.submitBtn.click();
}

}
