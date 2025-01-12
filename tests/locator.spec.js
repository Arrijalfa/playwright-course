// @ts-check
const { test, expect } = require('@playwright/test');

test('locator and assertions', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');

  // Login
  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Verifikasi berhasil login

  // Add item to cart
  const buttonAddBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
  await buttonAddBackpack.click();
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1'); // Verifikasi item masuk ke keranjang

  // Navigate to cart
  const cart = page.locator('#shopping_cart_container > a');
  await cart.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html'); // Verifikasi masuk ke halaman keranjang

  // Proceed to checkout
  const checkout = page.locator('#checkout');
  await checkout.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html'); // Verifikasi masuk ke halaman checkout

  // Fill in checkout information
  const checkoutFirstName = page.locator('#first-name');
  await checkoutFirstName.fill('Fadhil');
  await expect(checkoutFirstName).toHaveValue('Fadhil');

  const checkoutLastName = page.locator('#last-name');
  await checkoutLastName.fill('Arrijal');
  await expect(checkoutLastName).toHaveValue('Arrijal');

  const postalCode = page.locator('#postal-code');
  await postalCode.fill('45576');
  await expect(postalCode).toHaveValue('45576');

  // Continue checkout
  const continueCheckout = page.locator('#continue');
  await continueCheckout.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html'); // Verifikasi masuk ke langkah berikutnya

  // Finish checkout
  const finishCheckout = page.locator('#finish');
  await finishCheckout.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html'); // Verifikasi checkout selesai

  const successMessage = page.locator('.complete-header');
  await expect(successMessage).toHaveText('Thank you for your order!'); // Verifikasi pesan sukses
});
