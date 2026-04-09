import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceInventoryPage extends BasePage {
  readonly inventoryList: Locator;
  readonly firstItem: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryList = page.locator('.inventory_list');
    this.firstItem = page.locator('.inventory_item').first();
  }

  async expectVisible() {
    await expect(this.inventoryList).toBeVisible();
  }

  async getRandomItemIndex(): Promise<number> {
    const items = this.page.locator('.inventory_item');
    const count = await items.count();
    return Math.floor(Math.random() * count);
  }

  getItemTitleByIndex(index: number) {
    return this.page.locator('.inventory_item_name').nth(index);
  }

  async clickItemByIndex(index: number) {
    await this.page.locator('.inventory_item').nth(index).click();
  }

  async addtocartItemByIndex(index: number) {
    await this.page.locator('.inventory_item').nth(index).locator('button.btn_inventory').click();
  }

  async addFirstItemToCart() {
    const name = await this.firstItem.locator('.inventory_item_name').innerText();
    await this.firstItem.locator('button.btn_inventory').click();
    return name;
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
    await expect(this.page).toHaveURL(/cart.html$/);
  }
}
