import { defineConfig,devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features',
  steps: 'steps.js',
});


export default defineConfig({
  testDir,
  reporter: 'html',
  use: {
    //BaseURL
    // baseURL: 'https://andersen-webcp-wdev.wtsparadigm.com',

    // baseURL: process.env.RAHUL_ACADEMY_BASE_URL,
    // baseURLAPI: process.env.GIT_HUB_UI_API_URL,
    // extraHTTPHeaders: {
    //   // We set this header per GitHub guidelines.
    // //   Accept: 'application/vnd.github.v3+json',
    //   // Add authorization token to all requests.
    //   // Assuming personal access token available in the environment.
    // //   Authorization: `token ${process.env.API_TOKEN}`,
    // },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    headless: false,
    screenshot: 'only-on-failure',
    actionTimeout: 0,
    // storageState: './loginAuth.json',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
]
});
