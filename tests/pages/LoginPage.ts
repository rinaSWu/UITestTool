import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceLoginPage extends BasePage {
  readonly loginLogo: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLogo = page.locator('.login_logo');
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async expectVisible() {
    await expect(this.loginLogo).toBeVisible();
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
