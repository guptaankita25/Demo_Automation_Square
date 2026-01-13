import userActions from "../../utils/userActions";
import innagoLoginPage from "../pageobjects/innago_login.page";
import userData from "../../mocks/userData";
import { expect, browser } from "@wdio/globals";
import menu_page from "../pageobjects/menu_page";
import maintenance_page_PO from "../pageobjects/maintenance_page_PO";
import assertUtils from "../../utils/assertUtils";


describe("TC for Maintenance page on PO ", function () {
    let poUser;
        






    before(async function () {
        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po2;
        
    });

    after(async function () {
        await innagoLoginPage.logout();
        
    });






    it("TC to create", async () => {
        

    });
    









































});


