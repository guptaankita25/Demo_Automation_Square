//import { use } from "react";
import userActions from "../../utils/userActions";


class menu_page {
    locators = {
        dashboard: '//span[text() = "Dashboard"]',
        property: '//span[text() = "Properties "]',
        maintenance: '//span[text() = "Maintenance "]',

        waitTill: 3000,
        waitFor2Seconds: 2000,
        waitFor1Seconds: 1000,
        waitFor5Seconds: 5000,
        waitFor10Seconds: 10000,
    };

    async navigateToDashboard() {
        await userActions.waitFor(this.locators.waitFor2Seconds);
        await userActions.clickOn(this.locators.property);
        await userActions.waitFor(this.locators.waitFor2Seconds);
        await userActions.clickOn(this.locators.dashboard);
        await userActions.waitFor(this.locators.waitFor2Seconds);
        //await userActions.doubleClickOnElement("//in-button-group//div//button[@class ='button-primary active ng-star-inserted']")   [tried this function and this function works fine]
        //await userActions.waitUntilElementIsDisplayed('//h3[text()="Collection Stats"]');
        //await userActions.waitFor(this.locators.waitFor2Seconds);
    }

    async navigateToProperties() {
        await userActions.waitFor(this.locators.waitFor5Seconds);
        await userActions.clickOn(this.locators.property);
        //await userActions.navigateToUrlAndTitle();
    }

    async navigateToMaintenance() {
        await userActions.waitFor(this.locators.waitFor2Seconds);
        await userActions.clickOn(this.locators.maintenance);
    }
}
export default new menu_page();


