//import { th } from "@faker-js/faker";
import { ne } from "@faker-js/faker";
import dateUtils from "./dateUtils";
import userActions from "./userActions";
//import { use } from "react";


class Calendar {
    locators = {
        previos_Month_Button: '//button[@aria-label="Previous month"]',
        //previos_Month_Button: '//button[@aria-label="Previous 24 years"]',
        next_Month_Button: '//button[@aria-label="Next month"]',
        year_Selection_Button: '//button[contains(@class,"mat-calendar-period-button")]',

        

        getGivenDate: function (currentDate) {
            return `//button/span[text()= " ${currentDate} "]`;
        },
            

        getGivenYear: function (currentYear) {
            return `//button/span[text()= " ${currentYear} "]`; 
        },

        getGivenMonth: function (currentMonth) {
            return `//button/span[text()= " ${currentMonth} "]`;
        },
    }

 

    async setNextMonthGivenDate(dateToSelect) {
        await userActions.clickOn(this.locators.next_Month_Button);
        await userActions.clickOn(this.locators.getGivenDate(dateToSelect));
        console.log(`Selected date: ${dateToSelect} in next month`);
    }

    async setPreviousMonthGivenDate(dateToSelect) {
        await userActions.clickOn(this.locators.previos_Month_Button);
        await userActions.clickOn(this.locators.getGivenDate(dateToSelect));
        console.log(`Selected date: ${dateToSelect} in previous month`);
    }

    async setSameDateOfNextYear() {
        console.log("Setting same date of next year");
        const today = new Date(); //[This gives you today’s full date (year, month, day, time).]  gives you today’s date
        const nextYear = today.getFullYear() + 1; //today.getFullYear() returns something like 2025 and Adding +1 makes it 2026 (Calculate next year)

        const currentDay = today.getDate(); //  get today’s day number (like 1, 2, 3 … 31).   ex: if today is 2025 -11-05 , it returns 5.

        const currentMonth = dateUtils.getCurrentMonthInString(); // you will get current month in string format like JAN, FEB, MAR etc.

        await userActions.clickOn(this.locators.year_Selection_Button); // Click on year selection button to open year view

        await userActions.clickOn(this.locators.getGivenYear(nextYear)); // Click on next year

        await userActions.clickOn(this.locators.getGivenMonth(currentMonth)); // Click on current month in next year

        if (currentDay == 1) {
            // If today is 1st day of month, then select 2nd day (because 1st day may not be visible in calendar view)

            await userActions.clickOn(this.locators.previos_Month_Button); // Click on previous month button to go to last month
            await userActions.clickOn(this.locators.getGivenDate(2)); // Select 2nd day of last month
            await userActions.clickOn(this.locators.getGivenDate(30)); // select 30th day of previous month
        } else {
            await userActions.clickOn(this.locators.getGivenDate(currentDay)); // Select same day in next year
        }
    }

    

    async setLastDateOfFutureSixMonth() {

    }

    async setDateforGivenMonthAny() { 


    }




}



export default new Calendar();