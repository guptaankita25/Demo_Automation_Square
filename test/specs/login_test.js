import userActions from "../../utils/userActions";
import innagoLoginPage from "../pageobjects/innago_login.page";
import userData from "../../mocks/userData";
import { expect, browser } from "@wdio/globals";
import menu_page from "../pageobjects/menu_page";
//import menu_page from "../pageobjects/menu_page";
 


describe('TC to verify all the valiadtion of login page', function () {
    

    let poUser;

    before(async function() {

        await userActions.navigateToGivenUrl();
        poUser = userData.env.qa.poUsers.po1;
        
    });


    

    it('login with valid credentials', async () => {
        await browser.pause(5000); // Wait for 5 seconds before entering credentials
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await menu_page.navigateToDashboard();

    });
    
    




    
});


