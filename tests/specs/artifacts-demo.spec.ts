import { test, expect } from '@playwright/test';

test.describe('Artifacts demo (expected fail)', () => {
  // Force artifacts for this test only
  test.use({
    trace: 'on',       // always record trace
    video: 'on',       // always record video
    screenshot: 'on',  // capture screenshots for assertions
  });

  // Mark the block as expected to fail so the overall run stays green
  test.fail();

  test('[artifacts-demo] produces trace, video and screenshots', async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev');

    // Manual screenshot (in addition to automatic ones)
    await page.screenshot({ path: testInfo.outputPath('landing.png'), fullPage: true });

    // Intentionally wrong expectation to trigger a failure (expected by design)
    await expect(page.getByRole('heading', { name: /This heading does not exist/i })).toBeVisible();
  });
});
