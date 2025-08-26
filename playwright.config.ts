// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Test files are under tests/specs
  testDir: './tests/specs',
  testMatch: ['**/*.spec.ts'],

  fullyParallel: true,
  retries: 1,
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'], // Allure reporter
  ],

  use: {
    baseURL: 'https://playwright.dev',
    headless: true,

    // 📸 Screenshots
    screenshot: 'only-on-failure',

    // 🎥 Video
    video: 'retain-on-failure',

    // 🧵 Trace Viewer
    trace: 'retain-on-failure',
  },

  // Parallel cross-browser matrix
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
