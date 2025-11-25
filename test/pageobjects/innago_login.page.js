import userActions from "../../utils/userActions";
//import { expect, browser } from "@wdio/globals";
//const { expect, browser } = require("@wdio/globals");


class innagoLoginPage {
    locators = {
        userName: '//input[@id = "username"]',
        password: "#password",
        signIn_Button: "",
        continue_Button: '//button[@data-action-button-primary="true"]',
        remind_Me_Later_Button: "",
        logout_Button: 'a[href="/Landlord/logout"]',
    };

    /** creating function */

    async loginIn(username, password) {
        await userActions.enterText(this.locators.userName, username);
        await userActions.clickOn(this.locators.continue_Button);
        await userActions.enterText(this.locators.password, password);
        await userActions.clickOn(this.locators.continue_Button);
        await userActions.waitFor(5000); // Wait for 5 seconds after login
    }

    async logout() {
        //logout function code
        await userActions.waitFor(3000);
        await userActions.clickOn(this.locators.logout_Button);
        await userActions.deleteCookies();
        console.log("User has been logged out successfully.");
    }












    
}











export default new innagoLoginPage();

