import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { DocsPage } from '../pages/DocsPage';

test.describe('Home', () => {
  test('homepage has correct title and can open docs', async ({ page }) => {
    const home = new HomePage(page);
    const docs = new DocsPage(page);

    await home.goto();
    await expect(page).toHaveTitle(/Playwright/i);

    await home.openDocs();
    await docs.expectLoaded();
  });
});


