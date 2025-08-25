// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Тестовете са в папка tests/specs
  testDir: './tests/specs',
  testMatch: ['**/*.spec.ts'],

  fullyParallel: true,
  retries: 1,
  timeout: 30_000,
  expect: { timeout: 10_000 },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright']  // ⬅️ добавяме Allure репортера
  ],

  use: {
    baseURL: 'https://playwright.dev',
    headless: true,

    // 📸 Снимки
    screenshot: 'only-on-failure',   // 'off' | 'on' | 'only-on-failure'

    // 🎥 Видео
    video: 'retain-on-failure',      // 'off' | 'on' | 'retain-on-failure'

    // 🧵 Trace Viewer
    trace: 'retain-on-failure',      // 'off' | 'on' | 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
