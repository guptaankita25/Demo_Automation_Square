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






describe("TC to perform action on property details page", function () {
    let poUser;
        
    

    before(async function () {
        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po1;
    });

    after(async function () {
        await innagoLoginPage.logout();
    });





    it("TC to create M2M lease and add notes on property detials page with image", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let createdPropertyName = await propertyMS_page.createNewProperty();
        await propertyMS_page.addingM2MLeaseTermDetails_Monthly();
        console.log(createdPropertyName);
        await menu_page.navigateToProperties();   
        await propertyMS_page.applyFilterOnProperties([createdPropertyName.propertyName]);
        await propertyMS_page.selectGivenPropertyFromList([createdPropertyName.propertyName]);
    
        // now adding notes workflow
        
    
    
            
    
    
    });

























});