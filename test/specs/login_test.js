import userActions from "../../utils/userActions";
import innagoLoginPage from "../pageobjects/innago_login.page";
import userData from "../../mocks/userData";
import { expect, browser } from "@wdio/globals";
import menu_page from "../pageobjects/menu_page";
 


describe('TC to verify all the valiadtion of login page', () => {
    let poUser;

    before(async () => {

        await innagoLoginPage.launchUrl();
        poUser = userData.env.qa.poUsers.po1;
        
    });


     



    it('login with valid credentials', async () => {
        await browser.pause(5000); // Wait for 5 seconds before entering credentials
        await innagoLoginPage.loginIntoDashboard(poUser.userName, poUser.password);
        await browser.pause(10000); // Wait for 10 seconds after login
 
    });
    
    it






    
});


