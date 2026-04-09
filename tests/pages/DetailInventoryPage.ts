import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceInventoryDetailPage extends BasePage {
  readonly inventoryTitle: Locator;
  readonly inventoryPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryTitle = page.locator('.inventory_details_name');
    this.inventoryPrice = page.locator('.inventory_details_price');
  }

  async expectVisible() {
    await expect(this.inventoryTitle).toBeVisible();
  }

  async getInventoryTitle() {
    return (await this.inventoryTitle.innerText()).trim();
  }

  async getInventoryPrice() {
    return (await this.inventoryPrice.innerText()).trim();
  }

  async clickAddToCart() {
    await this.page.locator('button.btn_inventory').click();
  }

  async clickBackToProducts() {
    await this.page.locator('.inventory_details_back_button').click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
    await expect(this.page).toHaveURL(/cart.html$/);
  }
}