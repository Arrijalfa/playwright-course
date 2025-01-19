import loginLocator from "../locator/loginLocator";    
import { expect } from "@playwright/test"; 

export default class loginAction {
    /**
   *
   * @param {import ('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocator();
        this.inputUsername = page.locator(this.loginLocator.inputUsername);
        this.inputPassword = page.locator(this.loginLocator.inputPassword);
        this.clickButtonLogin = page.locator(this.loginLocator.clickButtonLogin);
        this.clickButtonAddBackpack = page.locator(this.loginLocator.clickButtonAddBackpack);
        this.cartBadge = page.locator(this.loginLocator.cartBadge);
        this.iconCart = page.locator(this.loginLocator.clickCartIcon);
        this.buttonCheckout = page.locator(this.loginLocator.clickButtonCheckout);
        this.inputFirstname = page.locator(this.loginLocator.inputFirstname);
        this.inputLastname = page.locator(this.loginLocator.inputLastname);
        this.inputPostalCode = page.locator(this.loginLocator.inputPostalCode);
        this.buttonContinue = page.locator(this.loginLocator.clickButtonContinue);
        this.buttonFinish = page.locator(this.loginLocator.clickButtonFinish);
        this.successMessage = page.locator(this.loginLocator.successMessage);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill("standard_user");
        await expect(this.inputUsername).toHaveValue("standard_user");
        await this.inputPassword.fill("secret_sauce");
        await expect(this.inputPassword).toHaveValue("secret_sauce");
        await this.clickButtonLogin.click();
      }

      async addProduct() {
        await this.clickButtonAddBackpack.click();
        await expect(this.cartBadge).toHaveText('1');
      }

      async chart() {
        await this.iconCart.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
      }
    
      async transaction() {
        await this.buttonCheckout.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
      }
    
      async checkout() {
        await this.inputFirstname.fill("Fadhil");
        await expect(this.inputFirstname).toHaveValue("Fadhil");
        await this.inputLastname.fill("Arrijal");
        await expect(this.inputLastname).toHaveValue("Arrijal");
        await this.inputPostalCode.fill("45576");
        await expect(this.inputPostalCode).toHaveValue("45576");
        await this.buttonContinue.click();
      }
    
      async detailCheckout() {
        await this.buttonFinish.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        await expect(this.successMessage).toHaveText('Thank you for your order!');
      }
}