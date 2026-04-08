import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceCompletePage extends BasePage {
  readonly completeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.completeHeader = page.locator('.complete-header');
  }

  async expectVisible() {
    await expect(this.page).toHaveURL(/checkout-complete.html$/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
