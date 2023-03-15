class CommonLocators{
    constructor(log){
        this.log = log
    }


    // async getWebElementByRole(page, type, locatorName, exactValue){
    // console.log(`Onto method :: getWebElementByRole`)
    //     console.log(`Retrieve WebElement Having type : ${type} Along With LocatorName : ${locatorName}  Along With exact : ${exactValue}`)
    //             return await page.getByRole(type, { name: locatorName, exact:exactValue })
        
    // }

    async getWebElementByRole(page, type, locatorName){
        console.log(`Onto method :: getWebElementByRole`)
            console.log(`Retrieve WebElement Having type : ${type} Along With LocatorName : ${locatorName}`)
                    return await page.getByRole(type, { name: locatorName})      
        }
    

    async clickOnWebElement(page, locator){
        console.log(`Onto method :: clickOnWebElement`)
        console.log(`Click On WebElement having locator identifier as ${locator}`)
        await page.locator(`${locator}`).click()
    }

    async getWebElementByPlaceholder(page, placeHolderName){
        console.log(`Onto method :: getWebElementByPlaceholder`)
         
        console.log(`Retrieve WebElement Having PlaceHolderName : ${placeHolderName}`)
        return await page.getByPlaceholder(placeHolderName)   
    }

    async getWebElementByXPathBasedOnTagNameValue(page, tagName, LocatorName ,LocatorValue){
        console.log(`Onto method :: getWebElementByXPath`)
        
        console.log(`Retrieve WebElement Having tagName : ${tagName},LocatorName : ${LocatorName},LocatorValue: ${LocatorValue}`)
        return await page.locator(`//${tagName}[contains(@${LocatorName}, \'${LocatorValue}\')]`)
            }
}

module.exports = CommonLocators;
