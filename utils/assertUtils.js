class asserUtils {
    /**
     *  mentioned below are the Element State Assertions
     */

    async verifyElementExistsonPage(element) {
        const webElement = await $(element);
        await expect(webElement).toBeExisting();
        console.log(`Verified that element ${element} exists on the page.`);
    }

    async verifyElementsDoesNotExistonPage(element) {
        const webElement = await $(element);
        await expect(webElement).not.toBeExisting();
        console.log(`Verified that element ${element} does not exist on the page.`);
    }

    async verifyElementToBeDisplayed(element) {
        const webElement = await $(element);
        await expect(webElement).toBeDisplayed();
        console.log(`Verified that element ${element} is displayed on the page.`);
    }

    async verifyElementDoesNotDisplayedOnPage(element) {
        const webElement = await $(element);
        await expect(webElement).not.toBeDisplayed();
        console.log(`Verified that element ${element} is not displayed on the page.`);
    }

    async verifyElementToBeEnabled(element) {
        const webElement = await $(element);
        await expect(webElement).tobeEnabled();
        console.log(`Verified that element ${element} is enabled on the page.`);
    }

    async verifyElementToBeDisabled(element) {
        const webElement = await $(element);
        await expect(webElement).not.toBeEnabled();
        console.log(`Verified that element ${element} is disabled on the page.`);
    }

    async verifyElementToBeClickable(element) {
        const webElement = await $(element);
        await expect(webElement).toBeClickable();
        console.log(`Verified that element ${element} is clickable on the page.`);
    }
    async verifyElementIsNotClickable(element) {
        const webElement = await $(element);
        await expect(webElement).not.toBeClickable();
        console.log(`Verified that element ${element} is not clickable on the page.`);
    }

    async verifyElementToBeFocused(element) {
        const webElement = await $(element);
        await expect(webElement).toBeFocused();
        console.log(`Verified that element ${element} is focused on the page.`);
    }

    async verifyElementIsNotFocused(element) {
        const webElement = await $(element);
        await expect(webElement).not.toBeFocused();
        console.log(`Verified that element ${element} is not focused on the page.`);
    }

    /**
     * Element Content Assertions
     */

    async verifyElementToHaveText(element, expectedText) {        /// exact match
        const webElement = await $(element);
        await expect(webElement).toHaveText(expectedText);
        console.log(`Verified that element ${element} has text: ${expectedText}.`);
    }

   //partial  match >>>> conatins text 

    async verifyElementsArrayCount(locator, countToCheck) {                                                         // this gives yu the count
        await console.log(`>>> Asserting selector list count :: ${locator} Equals ${countToCheck}`);

        const listItems = await $$(locator);
        await expect(listItems).toBeElementsArrayOfSize(countToCheck);
    }
}
export default new asserUtils();