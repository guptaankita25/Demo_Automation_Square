//const { expect, browser } = require("@wdio/globals");
import { expect, browser } from "@wdio/globals";

class userActions {
    async clickOn(element, extraTime) {
        const webElement = await $(element);
        await webElement.click();
    }

    async enterText(element, value, extraTime) {
        const webElement = await $(element);
        //await webElement.waitForDisplayed({ timeout: extraTime || 5000 });
        await webElement.clearValue(); // optional: clears previous text
        await webElement.setValue(value); // types the new text
        console.log(`Entered text "${value}" in ${element}`);
    }

    async navigateToGivenUrl() {
        await browser.pause(5000); // Wait for 5 seconds before launching the URL
        await browser.url("/");
        await browser.pause(50000); // Wait for 5 seconds after launching the URL
        await browser.maximizeWindow();
        console.log("Launching innago Url");
        await this.navigateToUrlAndTitle();
    }
    

    async navigateToUrlAndTitle() {
        const title = await browser.getTitle();
        const tile2 = await browser.getUrl();
        return console.log(`Title of the page is: ${title} and URL is: ${tile2}`);
    }

    async getUrl() {
        const url = await browser.getUrl();
        console.log(`Current URL is: ${url}`);
        return url;
    }


    /** Refresh page - Refresh the current page 
     * @returns {Promise<void>} a Promise that resolves when the page is refreshed 
     */
    async refreshPage() {
        await browser.refresh();
        await browser.pause(2000); // Wait for 2 seconds after refreshing the page
        console.log("Page is refreshed");
    }


}

export default new userActions();
