import { Page } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";

export const ARGOS_SCREENSHOT_DIR = 'argos-screenshots';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async capture(name: string ) {
    await argosScreenshot(this.page, name);
  }
}
