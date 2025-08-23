import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { DocsPage } from '../pages/DocsPage';

test.describe('Code examples (stable)', () => {
  test('intro shows at least one code block', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await home.openDocs();
    await docs.expectLoaded();

    await expect(docs.codeBlock()).toBeVisible();
  });

  test('assertions page shows code block', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await home.openDocs();
    await docs.expectLoaded();

    await docs.openAssertions();
    await expect(docs.codeBlock()).toBeVisible();
  });

  test('trace viewer page shows code block', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await home.openDocs();
    await docs.expectLoaded();

    await docs.openTraceViewer();
    await expect(docs.codeBlock()).toBeVisible();
  });
});

