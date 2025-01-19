// @ts-check
const { test } = require("@playwright/test");
const { default: loginAction } = require("../tests/action/loginAction");

test("PMO weekend", async ({ page }) => {
  const objActions = new loginAction(page);
  await objActions.goto();
  await objActions.inputLogin();
  await objActions.addProduct();
  await objActions.chart();
  await objActions.transaction();
  await objActions.checkout();
  await objActions.detailCheckout();
});