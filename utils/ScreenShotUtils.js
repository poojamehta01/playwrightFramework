
class ScreenShotUtils{
    constructor(log){
        this.log = log
    }
  
    async takeScreenShot(page,testInfo,pageName){ 
        await page.screenshot({path:`screenshots/${pageName}.png`})
    await testInfo.attach(pageName, { body: await page.screenshot(), contentType: 'image/png' });
}
}


module.exports = ScreenShotUtils;

       
