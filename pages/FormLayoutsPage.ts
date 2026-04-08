import { Page, expect } from '@playwright/test';
import { Target } from '@applitools/eyes-playwright';

export class FormLayoutsPage {
  constructor(private page: Page) {}

  async checkFormLayoutsPage(eyes: any) {
    await eyes.check('Form Layouts Page');
  }

  async fillInlineForm(name: string, email: string, eyes: any) {
    const inlineForm = this.page.locator('nb-card').filter({ hasText: 'Inline form' }).locator('form');
    await inlineForm.locator('[placeholder="Jane Doe"]').waitFor({ state: 'visible' });
    await inlineForm.locator('[placeholder="Jane Doe"]').fill(name);
    await eyes.check('Inline Form with Name Filled');
    await inlineForm.locator('[placeholder="Email"]').fill(email);
    await eyes.check('Inline Form with Email Filled');
  }

  async checkCheckbox(eyes: any) {
    const inlineForm = this.page.locator('nb-card').filter({ hasText: 'Inline form' }).locator('form');
    await inlineForm.locator('label').filter({ hasText: 'Remember me' }).click();
    await eyes.check('Inline Form with Checkbox Checked');
  }

  async scrollToGrid(eyes: any) {
    await this.page.locator('text=Using the Grid').scrollIntoViewIfNeeded();
    await eyes.check('Form Page - Grid Section');
  }

  async fillGridForm(email: string, password: string, eyes: any) {
    const gridForm = this.page.locator('nb-card').filter({ hasText: 'Using the Grid' }).locator('form');
    await expect(gridForm.locator('#inputEmail1')).toBeVisible();
    await gridForm.locator('#inputEmail1').fill(email);
    const passwordInput = gridForm.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill(password);
    await eyes.check('Grid Form Filled');
  }

  async scrollToHorizontal(eyes: any) {
    const horizontalCard = this.page.locator('nb-card').filter({ hasText: 'Horizontal form' });
    await horizontalCard.scrollIntoViewIfNeeded();
    await horizontalCard.waitFor({ state: 'visible' });
    await eyes.check(Target.region(horizontalCard).withName('Form Page - Horizontal Section'));
  }
}
