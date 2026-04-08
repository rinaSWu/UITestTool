import { Page } from '@playwright/test';

export const ARGOS_SCREENSHOT_DIR = 'argos-screenshots';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async capture(name: string) {
    await this.page.screenshot({
      path: `${ARGOS_SCREENSHOT_DIR}/${name}`,
      fullPage: true,
    });
  }
}
