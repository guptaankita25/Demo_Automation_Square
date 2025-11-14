import userActions from "../../utils/userActions";
import innagoLoginPage from "../pageobjects/innago_login.page";
import userData from "../../mocks/userData";
import { expect, browser } from "@wdio/globals";
import menu_page from "../pageobjects/menu_page";
import propertyMS_page from "../pageobjects/propertyMS_page";
import randomUtils from "../../utils/randomUtils";
import testData from "../../mocks/testData";

describe("TC to create a new property & create a lease", function () {
    let poUser;

    before(async function () {
        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po1;
    });

    it("TC to verify the creation of new lease", async () => {
        let addressinformation = {
            propertyName: await randomUtils.randomAlphabets(9),
            houseNumber: "House Number" + (await randomUtils.generateRandomNumber(6)),
            streetName: (await randomUtils.randomAlphabets(9)) + "street",
            zipCode: await randomUtils.generateRandomNumber(5),
            city: await randomUtils.getRandomValueFromArray(testData.po.newProperty.city_List),
            state: await randomUtils.getRandomValueFromArray(testData.po.newProperty.state_List),
            propertyType: await randomUtils.getRandomValueFromArray(testData.po.newProperty.property_Type),
        };

        await userActions.waitFor(5000); // Wait for 5 seconds before entering credentials
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToProperties();
        await userActions.waitFor(5000);
        await userActions.clickOn(propertyMS_page.locators.addPropertyDetails.addProperty_Button, 5000);
        await userActions.waitFor(5000);

        await userActions.clickOn(propertyMS_page.locators.addPropertyDetails.addressCollapse_Icon);

        await userActions.enterText(
            propertyMS_page.locators.addPropertyDetails.addressLine1_Input,
            addressinformation.houseNumber + "" + addressinformation.streetName
        );

        await userActions.enterText(propertyMS_page.locators.addPropertyDetails.city_Input, addressinformation.city);

        await userActions.enterText(propertyMS_page.locators.addPropertyDetails.zipCode_Input, addressinformation.zipCode.toString());

        await userActions.selectOptionFromDropDownBasedOnIndex(propertyMS_page.locators.addPropertyDetails.state_Dropdown, 1);

        await userActions.waitFor(2000);
    });
});
