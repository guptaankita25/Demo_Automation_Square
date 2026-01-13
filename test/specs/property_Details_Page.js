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
//import { th } from "@faker-js/faker";






describe("TC to perform action on property details page such as notes , invoices section, add late fees ", function () {
    let poUser,
        newNotes,
        notes;
       

        
    

    before(async function () {
        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po1;
    });

    after(async function () {
        await innagoLoginPage.logout();
    });





    xit("TC to create M2M lease and add notes on property detials page and edit notes and also to attach the file", async () => {            //working
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let propertyDetails = {                                  ////this is used when i don not want to create property
             propertyName: "oLfMBuYUi",
             city: "Los Angeles",
             //propertyName: 'New_Property1',
         };
        await propertyMS_page.applyFilterOnProperties([propertyDetails.propertyName]);
        await propertyMS_page.selectGivenPropertyFromList([propertyDetails.propertyName]);
        // let createdPropertyName = await propertyMS_page.createNewProperty();
        // await propertyMS_page.addingM2MLeaseTermDetails_Monthly();
        // console.log(createdPropertyName);
        // await menu_page.navigateToProperties();
        // await propertyMS_page.applyFilterOnProperties([createdPropertyName.propertyName]);
        // await propertyMS_page.selectGivenPropertyFromList([createdPropertyName.propertyName]);

        // now adding notes workflow
        notes = await propertyMS_page.addingRandomNotesOnDetailsPage();
        await assertUtils.verifyElementExistsonPage(propertyMS_page.locators.addNotesSection.getNotesByText(notes));
        let propertyNameText = await assertUtils.verifyElementExistsonPage(propertyMS_page.locators.addNotesSection.propertyName);   
        console.log(propertyNameText);
        await assertUtils.verifyElementExistsonPage(propertyMS_page.locators.addNotesSection.poName_Notes);
        await assertUtils.verifyElementExistsonPage(propertyMS_page.locators.addNotesSection.date);
        await userActions.clickOn(propertyMS_page.locators.addNotesSection.actionMenuIconBasedOnNotesIndex(notes));
        await userActions.clickOn(propertyMS_page.locators.addNotesSection.editIcon);
        newNotes = await randomUtils.randomAlphabets(7);
        await userActions.enterText(propertyMS_page.locators.addNotesSection.editNotesTextArea, newNotes);
        await userActions.clickOn(propertyMS_page.locators.addNotesSection.saveBtn);
        let imageFilePath_1 = process.cwd() + '/mocks/common/pic_1.png';                   // cwd : current working directory and also first get the abosulte path of the file
        await userActions.changeElementStyleToBlock(propertyMS_page.locators.addNotesSection.add_Attachment_Button);
        await userActions.uploadFile(propertyMS_page.locators.addNotesSection.add_Attachment_Button, imageFilePath_1);
        await userActions.clickOn(propertyMS_page.locators.addNotesSection.post_Button);
        
    
        await userActions.clickOn(propertyMS_page.locators.addNotesSection.cross_Icon);
    });


    xit("TC to validate adding late fees flow on the property details page and add from edit icon", async () => {                                                              //working
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let propertyDetails = {
            ////this is used when i don not want to create property

            propertyName: "avWvaHGsD",
            city: "New York",
            //propertyName: 'New_Property1',
        };
        await propertyMS_page.applyFilterOnProperties([propertyDetails.propertyName]);
        await propertyMS_page.selectGivenPropertyFromList([propertyDetails.propertyName]);
        // let createdPropertyName = await propertyMS_page.createNewProperty();
        // await propertyMS_page.addingM2MLeaseTermDetails_Monthly();
        // console.log(createdPropertyName);
        // await menu_page.navigateToProperties();
        // await propertyMS_page.applyFilterOnProperties([createdPropertyName.propertyName]);
        // await propertyMS_page.selectGivenPropertyFromList([createdPropertyName.propertyName]);
        await propertyMS_page.addingLateFeesOnPropertyDetailsPageForM2MafterLeaseCreation();
    });


    
    xit("TC to validate the upcoming invoices section on property details page and also edit and delete the invoice", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        let propertyDetails = {
            ////this is used when i don not want to create property

            propertyName: "ZdxWrNxeb",
            city: "New York",
            //propertyName: 'New_Property1',
        };
        await propertyMS_page.applyFilterOnProperties([propertyDetails.propertyName]);
        await propertyMS_page.selectGivenPropertyFromList([propertyDetails.propertyName]);
        // let createdPropertyName = await propertyMS_page.createNewProperty();

        // await propertyMS_page.addingM2MLeaseTermDetails_Monthly();
        // console.log(createdPropertyName);
        // await menu_page.navigateToProperties();
        // await propertyMS_page.applyFilterOnProperties([createdPropertyName.propertyName]);
        // await propertyMS_page.selectGivenPropertyFromList([createdPropertyName.propertyName]);

        await propertyMS_page.validateupcomingInvoicesDetailsOnPropertyDetailsPage();
    });
    
        


        

    

    



























});