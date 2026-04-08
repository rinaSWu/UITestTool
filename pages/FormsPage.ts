import { Page, expect } from '@playwright/test';

export class FormsPage {
  constructor(private page: Page) {}

  async clickForms() {
    await this.page.getByText('Forms').click();
  }

  async clickFormLayouts() {
    await this.page.getByText('Form Layouts').click();
    await expect(this.page.getByText('Inline form')).toBeVisible();
  }
}
