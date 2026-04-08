import { test } from '@playwright/test';
import fs from 'fs';
import { ARGOS_SCREENSHOT_DIR } from './pages/BasePage';
import { SauceLoginPage } from './pages/LoginPage';
import { SauceInventoryPage } from './pages/InventoryPage';
import { SauceCartPage } from './pages/CartPage';
import { SauceCheckoutPage } from './pages/CheckoutPage';
import { SauceCompletePage } from './pages/CompletePage';

process.env.ARGOS_API_KEY = process.env.ARGOS_API_KEY || 'argos_0691b6e5b19b25a76048def8e1719c7e63';

const SAUCE_URL = 'https://www.saucedemo.com/';

test.describe('Sauce Demo end-to-end flow', () => {
  test.beforeEach(() => {
    fs.mkdirSync(ARGOS_SCREENSHOT_DIR, { recursive: true });
  });

  test('should login, add an item to cart, and complete checkout', async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    const inventoryPage = new SauceInventoryPage(page);
    const cartPage = new SauceCartPage(page);
    const checkoutPage = new SauceCheckoutPage(page);
    const completePage = new SauceCompletePage(page);

    await page.goto(SAUCE_URL);

    await loginPage.expectVisible();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.expectVisible();
    const firstItemName = await inventoryPage.addFirstItemToCart();
    await inventoryPage.capture('inventory-page.png');

    await inventoryPage.openCart();
    await cartPage.expectVisible(firstItemName);
    await cartPage.capture('cart-page.png');

    await cartPage.checkout();
    await checkoutPage.fillInformation('John', 'Doe', '12345');
    await checkoutPage.finish();

    await completePage.expectVisible();
    await completePage.capture('checkout-complete.png');
  });
});
