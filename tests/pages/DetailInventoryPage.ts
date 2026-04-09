import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceInventoryDetailPage extends BasePage {
    readonly inventoryTitle: Locator;
    readonly InventoryPrice: Locator;

    constructor(page: Page) {
        super(page);
        this.inventoryTitle = page.locator('.inventory_details_desc.large_size');   
        this.InventoryPrice = page.locator('.inventory_details_price');
    }
    async expectVisible() {
        await expect(this.inventoryTitle).toBeVisible();
    }
    async getInventoryTitle() {
        return await this.inventoryTitle.innerText();
    }
    async getInventoryPrice() {
        return await this.InventoryPrice.innerText();
    }
    async clickAddToCart() {
        const addToCartButton = this.page.locator('#add-to-cart');
        await addToCartButton.click();
    }
    async clickBackToProducts() {
        const backButton = this.page.locator('#back-to-products');
        await backButton.click();
    }
    async openCart() {
        await this.page.click('.shopping_cart_link');
        await expect(this.page).toHaveURL(/cart.html$/);
    }
}