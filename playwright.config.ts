import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig<EyesFixture>({

  reporter: '@applitools/eyes-playwright/reporter',

  use: {
    eyesConfig: {
      apiKey: process.env.APPLITOOLS_API_KEY,
    },
    baseURL: 'http://localhost:4200/',
    viewport: { height: 720, width: 1280 }
  },

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
