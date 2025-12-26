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




describe("TC to create a new property & create a lease", function () {
    let poUser;
        
    

    before(async function () {
        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po1;
    });

    after(async function () {
        await innagoLoginPage.logout();
    });

    xit("TC to Create a Property and lease M2M", async () => {                                                  ///this is working
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
        //  let propertyDetails = {
        //      propertyName: "oLfMBuYUi",
        //      city: "Los Angeles",
        //      //propertyName: 'New_Property1',
        //  };
        // await propertyMS_page.applyFilterOnProperties([propertyDetails.propertyName]);
        // await propertyMS_page.selectGivenPropertyFromList([propertyDetails.propertyName]);


        await propertyMS_page.applyFilterOnProperties([createdPropertyName.propertyName]);   
        
        await propertyMS_page.selectGivenPropertyFromList([createdPropertyName.propertyName]);
    });


    xit("TC to create M2M lease with Bi-Monthly Frequency with additional fees", async () => {                    /// this is working
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let createdPropertyName1 = await propertyMS_page.createNewProperty();
        await propertyMS_page.addingM2MLeaseTermDetails_Bi_Monthly_With_Additional_fess();
        console.log(createdPropertyName1);
        await menu_page.navigateToProperties();
    });
   
    xit("TC to create M2M Lease with Weekly Fequency with recurring fess and also added one more item to the list for RI", async () => {             //this is working

        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let createdPropertyName2 = await propertyMS_page.createNewProperty();
        await propertyMS_page.addingM2MLeaseTermDetails_Weekly_With_Additional_fess_Recurring_Fess();
        console.log(createdPropertyName2);
    });


    xit("TC to create M2M Lease with Weekly Fequency with recurring fess added and line item on rental invoice is yes", async () => {    ////mark as line item is not working only need to check this 
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let createdPropertyName3 = await propertyMS_page.createNewProperty();
        await propertyMS_page.addingM2MLeaseTermDetails_Weekly_With_Additional_fess_Recurring_Fess_Make_This_line_Item_As_Rental_Invoice();
        console.log(createdPropertyName3);


    });



    it("TC to create M2M and verify the number of invoice and able to check the edit and delete invoice", async () => {
        

    });




        
        
        
        
        












    xit("TC to create a fixed term lease Monthly", async () => {              //this is working                   
        await userActions.waitFor(5000);       
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToDashboard();
        await menu_page.navigateToProperties();
        await userActions.waitFor(8000);
        await propertyMS_page.createNewProperty();
        await propertyMS_page.addingFixedTermLeaseDetails_Monthly(); 

    });


});
