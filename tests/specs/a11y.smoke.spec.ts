import { test, expect } from '@playwright/test';

test.describe('Basic a11y landmarks', () => {
  test('home has banner/nav/footer', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('navigation').first()).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('docs intro has main + some navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /^Docs$/i }).click();
    await expect(page.getByRole('main')).toBeVisible();

    const navs = page.getByRole('navigation');
    const count = await navs.count();
    expect(count).toBeGreaterThan(0);
    await expect(navs.first()).toBeVisible();
  });
});


