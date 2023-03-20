// Here we have locators/selectors to be utilised during cartPage validations
module.exports = {
  amountLocator: "#totalp",
  tableLocator: "#tbodyid",
  tableRowLocator: "#tbodyid tr",
  deleteLocator:
    "(//td[contains(text(),'$TITLE')]//following-sibling::td[2]//a)[1]",
};
