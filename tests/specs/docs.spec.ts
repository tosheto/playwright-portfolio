import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { DocsPage } from '../pages/DocsPage';

test.describe('Docs navigation (stable via search)', () => {
  test('open Installation and verify H1 present', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await home.openDocs();
    await docs.expectLoaded();

    await expect(page.locator('article h1, main h1').first()).toBeVisible();
  });

  test('navigate to Assertions docs and verify code block', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await home.openDocs();
    await docs.expectLoaded();

    await docs.openAssertions();
    await expect(docs.codeBlock()).toBeVisible();
  });

  test('navigate to Running tests and verify page header', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await home.openDocs();
    await docs.expectLoaded();

    await docs.openRunningTests();
    await expect(page.locator('article h1, main h1').first()).toContainText(/Running/i);
  });
});

