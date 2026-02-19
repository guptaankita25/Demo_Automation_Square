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

    xit("TC to verify the maintenance ticket count", async () => {
        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        let count = await maintenance_page_PO.getMaintenanceTotalCount();
        console.log("Maintenance total count is: " + count);

        
    });

    // quick filter test cases

     xit("TC to verify the maintenance ticket count for open quick Filter", async () => {
         await userActions.waitFor(5000);
         await browser.maximizeWindow();
         console.log("Launching innago Url");
         await innagoLoginPage.loginIn(poUser.userName, poUser.password);
         await userActions.waitFor(5000);
         await menu_page.navigateToMaintenance();
         await userActions.waitFor(5000);

         // understand this 
         let totalCount = await maintenance_page_PO.getMaintenanceTotalCount();
         console.log("Maintenance total count is: " + totalCount);
         await userActions.clickOn(maintenance_page_PO.locators.quickFilter.open_QuickFilter_Click);
         let currentOpenCount = await maintenance_page_PO.getMaintenanceTotalCount();
         await assertUtils.assertForInEquality(totalCount, currentOpenCount);
         await userActions.clickOn(maintenance_page_PO.locators.quickFilter.open_QuickFilter_Click);
         await maintenance_page_PO.applyMaintenanceFilter({ status: 'Open' })
         let filteredOpenCount = await maintenance_page_PO.getMaintenanceTotalCount();
         await assertUtils.assertForEquality(currentOpenCount, filteredOpenCount);
         console.log("Open maintenance count is: " + currentOpenCount); 

     });
    
    xit("TC to verify the maintenance ticket count for resolved quick Filter", async () => {

        await userActions.waitFor(5000);
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        let totalCount = await maintenance_page_PO.getMaintenanceTotalCount();
        console.log("Maintenance total count is: " + totalCount);
        await userActions.clickOn(maintenance_page_PO.locators.quickFilter.resolved_QuickFilter_Click);
        let currentResolvedCount = await maintenance_page_PO.getMaintenanceTotalCount();
        await assertUtils.assertForInEquality(totalCount, currentResolvedCount);
        await userActions.clickOn(maintenance_page_PO.locators.quickFilter.resolved_QuickFilter_Click);
        await maintenance_page_PO.applyMaintenanceFilter({ status: 'Resolved' })
        let filteredResolvedCount = await maintenance_page_PO.getMaintenanceTotalCount();
        await assertUtils.assertForEquality(currentResolvedCount, filteredResolvedCount);
        console.log("Resolved maintenance count is: " + currentResolvedCount);


    });

    it("TC to verify the maintenance ticket count for scheduled quick Filter", async () => { 
        await userActions.waitFor(5000);    
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await innagoLoginPage.loginIn(poUser.userName, poUser.password);
        await userActions.waitFor(5000);
        await menu_page.navigateToMaintenance();
        await userActions.waitFor(5000);
        let totalCount = await maintenance_page_PO.getMaintenanceTotalCount();
        console.log("Maintenance total count is: " + totalCount);
        await userActions.clickOn(maintenance_page_PO.locators.quickFilter.scheduled_QuickFilter_Click);
        let currentscheduled = await maintenance_page_PO.getMaintenanceTotalCount();
        await assertUtils.assertForInEquality(totalCount, currentscheduled);
        
        await userActions.clickOn(maintenance_page_PO.locators.quickFilter.scheduled_QuickFilter_Click);
        await maintenance_page_PO.applyMaintenanceFilter({ status: "Scheduled" });
        let filteredScheduledCount = await maintenance_page_PO.getMaintenanceTotalCount();
        await assertUtils.assertForEquality(currentscheduled, filteredScheduledCount);
        console.log("Scheduled maintenance count is: " + filteredScheduledCount);





    });
    
    







        
        
        


    



        
        

        
    









































});


