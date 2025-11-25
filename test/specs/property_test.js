import userActions from "../../utils/userActions";
import innagoLoginPage from "../pageobjects/innago_login.page";
import userData from "../../mocks/userData";
import { expect, browser } from "@wdio/globals";
import menu_page from "../pageobjects/menu_page";
import propertyMS_page from "../pageobjects/propertyMS_page";
import randomUtils from "../../utils/randomUtils";
import testData from "../../mocks/testData";
import assertUtils from "../../utils/assertUtils";
import calender from "../../utils/calender.js";
//import { add } from "winston";

//import { assign } from "nodemailer/lib/shared";
//import { use } from "react";

describe("TC to create a new property & create a lease", function () {
    let poUser;

    before(async function () {
        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po1;
    });

    after(async function () {
        await innagoLoginPage.logout();
    });

    xit("TC to Create a Property and lease M2M", async () => {
        await userActions.waitFor(5000); // Wait for 5 seconds before entering credentials
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        await propertyMS_page.createNewProperty();
        await propertyMS_page.addingM2MLeaseTermDetails_Monthly();
        
    });

    it("TC to create a fixed term lease Monthly", async () => {
    
        await userActions.waitFor(5000); // Wait for 5 seconds before entering credentials
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        await propertyMS_page.createNewProperty();
        await propertyMS_page.addingFixedTermLeaseDetails_Monthly();
     
    });

    






});
