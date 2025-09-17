class userActions {
    async clickOn(element, extraTime) {
        const webElement = await $(element);
        await webElement.click();
    }

    async enterText(element, value, extraTime) {
        const webElement = await $(element);
        //await webElement.waitForDisplayed({ timeout: extraTime || 5000 });
        await webElement.clearValue();
        await webElement.setValue(value);
    }

    // async enterText(element, value, extraWaitTime) {
    //     const elemnt = await $(element);
    //     await elemnt.waitForDisplayed({ timeout: 5000 });
    //     await elemnt.clearValue(); // optional: clears previous text
    //     await elemnt.setValue(value); // types the new text
    //     console.log(`Entered text "${value}" in ${element}`);
    // }

    // async launchUrl() {
    //     await browser.url("https://qa-my.innago.com/login");
    //     await browser.maximizeWindow();
    //     console.log('Launching innago Url')
    // }




    async refreshPage() {
        
           
        

  
    }   







}

export default new userActions();
