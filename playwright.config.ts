// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Tests live under tests/specs
  testDir: './tests/specs',
  testMatch: ['**/*.spec.ts'],

  fullyParallel: true,
  retries: 1,
  timeout: 30_000,
  expect: { timeout: 10_000 },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],

  use: {
    baseURL: 'https://playwright.dev',
    headless: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // keep as you have it
  },

  // Parallel cross-browser matrix in a single run
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
