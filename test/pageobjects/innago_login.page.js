
import userActions from "../../utils/userActions";
//import { expect, browser } from "@wdio/globals";
//const { expect, browser } = require("@wdio/globals");


class innagoLoginPage {
    locators = {
        userName: 'input[data-locator="loginUsername"]',
        password: 'input[data-locator="loginPassword"]',
        signIn_Button: '//button[contains(text(),"Sign In")]',
        
    };

    




    
    async loginIntoDashboard(username, password) {
        //await userActions.waitForElementToDisplay(this.locator.userName);
        await userActions.enterText(this.locators.userName, username);
        await userActions.enterText(this.locators.password, password);
        await userActions.clickOn(this.locators.signIn_Button);
    }
}

export default new innagoLoginPage();

