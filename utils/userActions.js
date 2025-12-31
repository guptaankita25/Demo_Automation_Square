//const { expect, browser } = require("@wdio/globals");
import { expect, browser, $ } from "@wdio/globals";

class userActions {
    async clickOn(element, extraTime) {
        const webElement = await $(element);
        await webElement.click();
        await this.waitFor(extraTime || 3000);
        console.log(`Clicked on element: ${element}`);
    }
/** 
    //enter text - Because enterText() expects text (a string), not a number.
    //ZIP codes are often stored as numbers, so .toString() converts them 01235---12345 so that why we use to stringmethod
*/
    async enterText(element, value, extraTime) {
        const webElement = await $(element);
        //await webElement.waitForDisplayed({ timeout: extraTime || 5000 });
        await webElement.clearValue(); // optional: clears previous text
        await webElement.setValue(value); // types the new text
        await this.waitFor(extraTime || 3000);
        console.log(`Entered text "${value}" in ${element}`);
    }

    async navigateToGivenUrl() {
        await browser.pause(5000); // Wait for 5 seconds before launching the URL
        await browser.url("/");
        await browser.pause(5000); // Wait for 5 seconds after launching the URL
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

    /**broswer URL - Get the current URL of the browser
     * @returns {Promise<string>} a Promise that resolves to the current URL
     */
    async getBrowserUrl() {
        const currentUrl = await browser.getUrl();
        console.log(`Current browser URL is: ${currentUrl}`);
        return currentUrl;
    }

    /**opens new window - Opens a new browser window with the specified URL
     * @param {string} url - The URL to open in the new window
     * @returns {Promise<void>} a Promise that resolves when the new window is opened
     */
    async openNewWindow(url) {
        console.log(`Opening new window with URL: ${url}`);
        await browser.newWindow(url);
        await browser.pause(2000); // Wait for 2 seconds after opening the new window
    }

    /**close current window - Closes the current browser window
     * @returns {Promise<void>} a Promise that resolves when the current window is closed
     */
    async closeCurrentWindow() {
        console.log("Closing current window");
        await browser.closeWindow();
        await browser.pause(2000); // Wait for 2 seconds after closing the window
    }

    /** back to previous page - Navigates back to the previous page in the browser history
     * @returns {Promise<void>} a Promise that resolves when the browser navigates back
     */
    async backToPreviousPage() {
        console.log("Navigating back to the previous page");
        await browser.back();
        await browser.pause(2000); // Wait for 2 seconds after navigating back
    }

    /** forward to next page - Navigates forward to the next page in the browser history
     * @returns {Promise<void>} a Promise that resolves when the browser navigates forward
     */
    async forwardToNextPage() {
        console.log("Navigating forward to the next page");
        await browser.forward();
        await browser.pause(2000); // Wait for 2 seconds after navigating forward
    }

    /**maximize window - Maximizes the browser window
     * @returns {Promise<void>} a Promise that resolves when the browser window is maximized
     */
    async maximizeWindow() {
        console.log("Maximizing browser window");
        await browser.maximizeWindow();
        await browser.pause(2000); // Wait for 2 seconds after maximizing the window
    }

    /**
     * minimize window - Minimizes the browser window
     */
    async minimizeWindow() {
        console.log("Minimizing browser window");
        await browser.minimizeWindow();
        await browser.pause(2000); // Wait for 2 seconds after minimizing the window
    }

    /**
     * Pauses test execution for the given amount of time in milliseconds.
     * @param {number} timeOut - The time to wait in milliseconds.
     */
    async waitFor(timeOut) {
        // await this.logDataToReports(`Waiting for asked time :: ${timeOut}`);
        await browser.pause(timeOut);
    }

    /**
     * delete cookies - Deletes all cookies in the current browser session
     */
    async deleteCookies() {
        console.log("Deleting all cookies in the current browser session");
        await browser.deleteCookies();
        await browser.pause(2000); // Wait for 2 seconds after deleting cookies
    }

    /**
     * scroll to element - Scrolls the page to bring the specified element into view
     * @param {string} locator - The locator of the element to scroll to    
     * @returns {Promise<void>} a Promise that resolves when the page is scrolled to the element
     */
    async scrollToElement(locator) {
        const element = await $(locator);
        await element.scrollIntoView();
        await browser.pause(2000);
    }


    
    /**
     * Element Interaction Commands
     */

    /**
     * clickOnElement - Clicks on the specified element.
     *
     */
    async clickOnElement(locator) {
        const element = await $(locator);
        await element.click();
        console.log(`Clicked on element: ${locator}`);
    }

    /**
     * doubleClickOnElement - Double clicks on the specified element.
     */
    async doubleClickOnElement(locator) {
        const element = await $(locator);
        await element.doubleClick();
        console.log(`Double clicked on element: ${locator}`);
    }

    /**
     * Move to element (hover) - Moves the mouse to the center of an element (useful for hover menus). [moves the mouse pointer to the center of a given element.]
     */

    async moveToElement(locator) {
        const element = await $(locator);
        await element.moveTo();
        console.log(`Moved to element: ${locator}`);
    }

    /**
     * rightClickOnElement - Right clicks on the specified element [Simulates a right-click]
     */
    async rightClickOnElement(locator) {
        const element = await $(locator);
        await element.click({ button: "right" });
        console.log(`Right clicked on element: ${locator}`);
    }

    /**
     * Set value - Types text into an input or textarea (replaces existing value).
     */
    async setValue(locator, value) {
        const element = await $(locator);
        await element.setValue(value);
        console.log(`Set value "${value}" in element: ${locator}`);
    }

    /**
     * Clear Value - Clears the current value in an input field. [removes the existing text from an input field or textarea.]
     */
    async clearValue(locator) {
        const element = await $(locator);
        await element.clearValue();
        console.log(`Cleared value in element: ${locator}`);
    }

    /**
     * add value - Appends text to the existing value in an input field [Append text without clearing]
     */
    async addValue(locator, value) {
        const element = await $(locator);
        await element.addValue(value);
        console.log(`Added value"${value}" in element: ${locator}`); //[This message is printed after you’ve set or added a value to an input element.]
    }

    /**
     * get value - Get input field value  [Used for: input fields, textareas, or any element with a value attribute.
     * Returns: the value property (e.g. what a user has typed inside an <input> or <textarea>).]
     */

    async getValue(locator) {
        const element = await $(locator);
        const value = await element.getValue();
        console.log(`Value in element ${locator} is: ${value}`); //[This message is printed when you are retrieving or checking the current value of the element.][majorly used for getvalue & get text]
        return value;
    }

    /**
     *get element text - Get visible text  [Used for: any element that contains visible text.
     * Used for: elements that contain visible text content between tags (not in attributes).
     * Returns: the text that’s displayed to the user.
     */

    async getElementText(locator) {
        const element = await $(locator);
        const text = await element.getText();
        console.log(`Text in element ${locator} is: ${text}`);
        return text;
    }

    /**
     * attribute value
     */

    /**
     * Element Is Displayed → returns true if the element is visible on the page (not hidden with CSS or display: none), otherwise false.
     */

    async iselementDisplayed(locator) {
        const element = await $(locator);
        const isDisplayed = await element.isDisplayed();
        console.log(`Element ${locator} is displayed: ${isDisplayed}`);
        return isDisplayed;
    }

    /**
     * Element Is Enabled → returns true if the element is enabled (not disabled), otherwise false.
     *
     */
    async iselementEnabled(locator) {
        const element = await $(locator);
        const isEnabled = await element.isEnabled();
        console.log(`Element ${locator} is enabled: ${isEnabled}`);
        return isEnabled;
    }

    /**
     * element exits - Check if exists in DOM [Returns true if the element exists in the DOM (HTML structure), regardless of whether it is visible or not; otherwise, returns false.]
     */
    async iselementExisting(locator) {
        const element = await $(locator);
        const isExisting = await element.isExisting();
        console.log(`Element ${locator} exists in DOM: ${isExisting}`);
        return isExisting;
    }

    /**
     * element clickable - Check if element is clickable [Returns true if the element is clickable (visible and enabled); otherwise, returns false.]
     */
    async iselementClickable(locator) {
        const element = await $(locator);
        const isclickable = await element.isClickable();
        console.log(`Element ${locator} is clickable: ${isclickable}`);
        return isclickable;
    }

    /**
     * wait until element is displayed - Waits until the specified element is displayed on the page. [waits until the element becomes visible on the page — not just existing in the DOM, but actually displayed.]
     */
    async waitUntillElementIsDispayed(locator, timeout = 5000) {
        const element = await $(locator);
        await element.waitForDisplayed({ timeout });
        console.log(`Waited untill element ${locator} is displayed`);
    }

    /**
     * wait until element is clickable - Waits until the specified element is clickable on the page [Waits until an element is visible and enabled, meaning it can actually be clicked.]
     */
    async waitUntilElementIsClickable(locator, timeout = 5000) {
        const element = await $(locator);
        await element.waitForClickable({ timeout });
        console.log(`Waited until element ${locator} is clickable`);
    }

    /**
     * wait until element exists - Waits until the specified element exists in the DOM [Waits until the element exists in the DOM, whether it’s visible or not.]
     */
    async waitUntilElementExists(locator, timeout = 5000) {
        const element = await $(locator);
        await element.waitForExist({ timeout });
        console.log(`Waited until element ${locator} exists in DOM`);
    }

    //  Function for dropdown selection -- three ways are there to select value from dropdown
    /**
     * 1. select by visible text - Selects an option from a dropdown by its visible text. [option based on what the user sees inside the dropdown — the visible text.]
     */
    async selectFromDropDownByVisbileText(locator, text) {
        const element = await $(locator);
        await element.selectByVisibleText(text);
        console.log(`Selected ${text} from the dropdown ${locator}`);
    }

    /**
     * 2. select by attribute value - Selects an option from a dropdown by its attribute value.[Each <option> tag can have attributes like value, id, etcYou can select based on those attribute values.]
     */

    async selectFromDropDownByAttributeValue(locator, attribute, value) {
        const element = await $(locator);
        await element.selectByAttribute(attribute, value);
        console.log(`Selected option with ${attribute}="${value}" from the dropdown ${locator}`);
    }

    /**
     * 3. select by index - Selects an option from a dropdown by its index position.You can select based on the position of the option in the dropdown list.Index starts at 0.
     */
    async selectOptionFromDropDownBasedOnIndex(locator, index) {
        const element = await $(locator);
        await element.selectByIndex(index);
        await this.waitFor(2000);

        console.log(`Selected option at index ${index} from the dropdown ${locator}`);
    }
}

export default new userActions();
