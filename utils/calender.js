import userActions from "./userActions";


class Calendar {
    locators = {
        previos_Month_Button: '//button[@aria-label="Previous month"]',
        next_Month_Button: '//button[@aria-label="Next month"]',
        year_Selection_Button: 'span [id^= "mat-calendar-button-"]',

        getGivenDate: function (currentDate) {
            //return `//button[@aria-current= "${currentDate}"]`;
            //return `//button/div[normalize-space(text()) = "${currentDate}"] "]`;
            return`//button/div[text()=" ${currentDate} "]`
        },
        getGivenYear: function (currentYear) {
            //return `//button[@aria-label="${currentYear}"]`;
            return `//button/div[text()=" ${currentYear} "]`;

        },
        getGivenMonth: function (currentMonth) {
            //return `//button[@aria-current="${currentMonth}"]`;
            return `//button/div[text()=" ${currentMonth} "]`;

        },
    };

    async setNextMonthGivenDate(dateToSelect) {
        await userActions.clickOn(this.locators.next_Month_Button);
        await userActions.clickOn(this.locators.getGivenDate(dateToSelect));
        console.log(`Selected date: ${dateToSelect} in next month`);
    }

    async setSameDateOfNextYear() { 

        

    }


    async setLastDateOfFutureSixMonth() { 


    }




}


















export default new Calendar();