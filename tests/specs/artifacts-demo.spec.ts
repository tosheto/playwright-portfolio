// tests/specs/artifacts-demo.spec.ts
import { test, expect } from '@playwright/test';

// Enable artifacts only for tests in THIS FILE
test.use({
  trace: 'on',        // always record trace
  video: 'on',        // always record video
  screenshot: 'on',   // capture screenshots for assertions
});

test('artifacts demo (expected fail) – produces trace, video and screenshot', async ({ page }, testInfo) => {
  // Mark this test as expected to fail so the run stays green
  test.fail(true, 'Demo failure to produce artifacts (trace/video/screenshot)');

  await page.goto('/');

  // Manual full-page screenshot saved into the test output directory
  await page.screenshot({ path: testInfo.outputPath('landing.png'), fullPage: true });

  // Deliberately wrong assertion -> will fail but marked as expected
  await expect(
    page.getByRole('heading', { name: /this heading does not exist/i })
  ).toBeVisible();
});
