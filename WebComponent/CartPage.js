const { By } = require ('selenium-webdriver');

class CartPage {
    constructor(driver){
        this.driver = driver;
        this.addToCartBackpack = By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.addToCartBike = By.xpath("//button[@id='add-to-cart-sauce-labs-bike-light']");
        this.cartCount = By.className('shopping_cart_link');
    }

    async addToCart(){
        await this.driver.findElement(this.addToCartBackpack).click();
        await this.driver.findElement(this.addToCartBike).click();
        const cartItemCountText = await this.driver.findElement(this.cartCount).getText();
        const itemCount = cartItemCountText.trim();
        return itemCount;
    }
}

module.exports = CartPage;