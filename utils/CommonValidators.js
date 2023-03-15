const playwrightExpect = require('@playwright/test').expect

class CommonValidators {

    constructor( log, parameters){

        this.log = log, 
        this.parameters = parameters
    }

    validateWebElementToContainText(actualValue, expectedToContainText){
        console.log(`Onto method :: validateWebElementToContainText`)
        console.log(`Validating Text ${actualValue} Retrieved from WebElement To Have Text ${expectedToContainText}`)
        playwrightExpect(actualValue).toContain(expectedToContainText)
    }

}

module.exports = CommonValidators;