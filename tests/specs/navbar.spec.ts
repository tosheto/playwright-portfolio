import { test, expect } from '@playwright/test';

test('Docs link navigates', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /^Docs$/i }).click();
  await expect(page).toHaveURL(/\/docs\//);
});

test('API link is present in top nav', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /API/i })).toBeVisible();
});

