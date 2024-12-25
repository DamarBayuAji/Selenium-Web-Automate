const { By } = require ('selenium-webdriver');

class CheckoutPage {
    constructor(driver){
        this.driver = driver;
        this.btnIconCart = By.className('shopping_cart_link');
        this.btnCheckout = By.xpath("//button[@id='checkout']");
        this.fieldFirstName = By.xpath("//input[@id='first-name']");
        this.fieldLastName = By.xpath("//input[@id='last-name']");
        this.fieldZip = By.xpath("//input[@id='postal-code']");
        this.btnContinue = By.id('continue');
        this.btnFinish = By.id('finish');
    }

    async finishCheckout(firstname,lastname,zip){
        await this.driver.findElement(this.btnIconCart).click();
        await this.driver.findElement(this.btnCheckout).click();
        await this.driver.findElement(this.fieldFirstName).sendKeys(firstname);
        await this.driver.findElement(this.fieldLastName).sendKeys(lastname);
        await this.driver.findElement(this.fieldZip).sendKeys(zip);
        await this.driver.findElement(this.btnContinue).click();
        await this.driver.findElement(this.btnFinish).click();
    
    }

    async isOnCheckoutCompletePage(){
        const title = await this.driver.findElement(By.className('title'));
        return title.getText();
    }
}

module.exports = CheckoutPage;