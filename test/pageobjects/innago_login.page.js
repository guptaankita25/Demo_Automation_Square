
import userActions from "../../utils/userActions";
import { expect, browser } from "@wdio/globals";
//const { expect, browser } = require("@wdio/globals");


class innagoLoginPage {
    locators = {
        userName: 'input[data-locator="loginUsername"]',
        password: 'input[data-locator="loginPassword"]',
        signIn_Button: '//button[contains(text(),"Sign In")]',









        
    };

    async launchUrl() {
        //browser.pause(10000); // Wait for 5 seconds before launching the URL
        await browser.url("https://qa-my.innago.com/login");
        browser.pause(10000); // Wait for 5 seconds after launching the URL
        await browser.maximizeWindow();
        console.log("Launching innago Url");
    }

    // async navigateToDashboard(testuser, passwo) {
    //     await userActions.enterText(this.locators.userName, testuser);
    //     await userActions.enterText(this.locators.password, passwo);
    //     await userActions.clickOn(this.locators.signIn_Button);
    // }

    async loginIntoDashboard(username, password) {
        //await userActions.waitForElementToDisplay(this.locator.userName);
        await userActions.enterText(this.locators.userName, username);
        await userActions.enterText(this.locators.password, password);
        await userActions.clickOn(this.locators.signIn_Button);
    }
}

export default new innagoLoginPage();

