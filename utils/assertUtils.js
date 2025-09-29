class asserUtils { 

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





    









}