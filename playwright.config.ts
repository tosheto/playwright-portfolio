// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for tests in the *current* folder
  testDir: '.',
  testMatch: ['**/*.spec.ts'],

  fullyParallel: true,
  retries: 1,
  timeout: 30_000,
  expect: { timeout: 10_000 },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    baseURL: 'https://playwright.dev',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});

