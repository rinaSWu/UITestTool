import { Page, expect } from '@playwright/test';

export class ChartsPage {
  constructor(private page: Page) {}

  async clickCharts() {
    await this.page.getByRole('link', { name: 'Charts', exact: true }).click();
  }

  async clickEcharts() {
    await this.page.getByRole('link', { name: 'Echarts' }).click();
    await expect(this.page.getByText('Pie')).toBeVisible();
  }

  async checkChartsPage(eyes: any) {
    await eyes.check('Charts - Echarts Page');
  }
}
