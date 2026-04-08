import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceCheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
    await expect(this.page).toHaveURL(/checkout-step-two.html$/);
  }

  async finish() {
    await expect(this.page.locator('.summary_info')).toBeVisible();
    await this.page.click('#finish');
  }
}
