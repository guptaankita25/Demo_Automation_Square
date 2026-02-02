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






    xit("TC to create a maintenance ticket", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        let propertyCreated =  await maintenance_page_PO.clickNewMaintenanceButton();
        await maintenance_page_PO.filterMaintenanceTickets([propertyCreated.propertyName]);
    });

    xit("TC to mark as resolved maintence created & also re open the ticket", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        await maintenance_page_PO.clickNewMaintenanceButton();
        await userActions.waitFor(5000);
        await maintenance_page_PO.markAsResolved("Issue has been resolved.");
        await userActions.waitFor(5000);
        await maintenance_page_PO.reopenTicket();
    });

    xit("TC to forward maintenance ticket to vendor", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        await maintenance_page_PO.clickNewMaintenanceButton();
        await userActions.waitFor(5000);
        await maintenance_page_PO.forwardMaintenanceTicketToVendor();
    });

    xit("TC to set the reminder only", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        await maintenance_page_PO.clickNewMaintenanceButton();
        await userActions.waitFor(5000);
        await maintenance_page_PO.setReminderOnly();                        // i need to verify the due date once it is chnages this part is left i will be working on that part also after the recurrence block is done

    });


    xit("TC to set the recurrening maintenance request with reminder", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        await maintenance_page_PO.clickNewMaintenanceButton();
        await userActions.waitFor(5000);
        await maintenance_page_PO.setReminderWithRecurrence();
    });



        
        
        


    



        
        

        
    









































});


