import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceCartPage extends BasePage {
  readonly cartList: Locator;
  readonly cartItemName: Locator;

  constructor(page: Page) {
    super(page);
    this.cartList = page.locator('.cart_list');
    this.cartItemName = page.locator('.cart_item .inventory_item_name');
  }

  async expectVisible(itemName: string) {
    await expect(this.cartList).toBeVisible();
    await expect(this.cartItemName).toHaveText(itemName);
  }

  async checkout() {
    await this.page.click('#checkout');
    await expect(this.page).toHaveURL(/checkout-step-one.html$/);
  }
}
