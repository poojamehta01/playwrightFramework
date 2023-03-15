class CommonLocators{
    constructor(log){
        this.log = log
    }


    async getWebElementByRole(page, type, locatorName){
    
        console.log(`********** Start getWebElementByRole **********\n`)
        console.log(`Getting WebElement with type : ${type}, LocatorName : ${locatorName}`)
        console.log(`********** Finish getWebElementByRole **********\n`)
                return await page.getByRole(type, { name: locatorName})  
        
    
           
        }
    

    async clickOnWebElement(page, locator){
       
        console.log(`********** Start clickOnWebElement ********** \n`)
        console.log(`Click On WebElement having locator identifier as ${locator}`)
        await page.locator(`${locator}`).click()
        console.log(`********** Finish clickOnWebElement ********** \n`)
    
       
    }

    async getWebElementByPlaceholder(page, placeHolderName){
     
        console.log(`********** Start getWebElementByPlaceholder ********** \n`)
        console.log(`Getting WebElement with PlaceHolderName : ${placeHolderName}`)
        console.log(`********** Finish getWebElementByPlaceholder **********  \n`)
        return await page.getByPlaceholder(placeHolderName) 
         
        

    }

    async getWebElementByXPathBasedOnTagNameValue(page, tagName, LocatorName ,LocatorValue){
        console.log(`********** Start getWebElementByXPathBasedOnTagNameValue  **********\n`)     
        console.log(`Getting WebElement Having tagName : ${tagName},LocatorName : ${LocatorName},LocatorValue: ${LocatorValue}`)
        console.log(`********** Finish getWebElementByXPathBasedOnTagNameValue ********** \n`)
        return await page.locator(`//${tagName}[contains(@${LocatorName}, \'${LocatorValue}\')]`)
             
       
    }

    async getWebElementByLabel(page, label){
        
        console.log(`********** Start getWebElementByLabel ********** \n`)     
        console.log(`Getting WebElement Having label : ${label}`)
        console.log(`********** Finish getWebElementByLabel ********** \n`)
        return await page.getByLabel(label)
          
    }

    async inputTextForWebElement(webElement, inputText){
       
        console.log(`********** Start inputTextForWebElement ********** \n`) 
        console.log(`Input WebElement : ${webElement} With Text Input as ${inputText}`)
        await webElement.fill(inputText)
        console.log(`********** Finish inputTextForWebElement ********** \n`) 
   
    }

    async getTextContentForWebElement(webElement){
        console.log(`Getting textContent for the WebElement : ${webElement}`)
        const textContent = await webElement.textContent()
        console.log(`The Text Content is : ${textContent}`)
        console.log(`********** Finish getTextContentForWebElement ********** \n`) 
        return await textContent             
    }
    
}

module.exports = CommonLocators;
