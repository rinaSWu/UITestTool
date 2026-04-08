import { test } from '@applitools/eyes-playwright/fixture';
import { HomePage } from '../pages/HomePage';
import { FormsPage } from '../pages/FormsPage';
import { FormLayoutsPage } from '../pages/FormLayoutsPage';
import { ChartsPage } from '../pages/ChartsPage';

let homePage: HomePage;
let formsPage: FormsPage;
let formLayoutsPage: FormLayoutsPage;
let chartsPage: ChartsPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  formsPage = new FormsPage(page);
  formLayoutsPage = new FormLayoutsPage(page);
  chartsPage = new ChartsPage(page);
  await homePage.goto();
});

test.afterEach(async ({ eyes }) => {
  await eyes.closeAsync();
});

test.skip('Applitools VisualTesting', async ({ eyes }) => {
  await homePage.check(eyes);

  await formsPage.clickForms();
  await formsPage.clickFormLayouts();

  await formLayoutsPage.checkFormLayoutsPage(eyes);
  await formLayoutsPage.fillInlineForm('John Smith', 'john.smith@example.com', eyes);
  await formLayoutsPage.checkCheckbox(eyes);
  await formLayoutsPage.scrollToGrid(eyes);
  await formLayoutsPage.fillGridForm('grid@example.com', 'password123', eyes);
  await formLayoutsPage.scrollToHorizontal(eyes);

  await chartsPage.clickCharts();
  await chartsPage.clickEcharts();
  await chartsPage.checkChartsPage(eyes);
});
