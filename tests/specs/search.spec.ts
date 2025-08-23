import { test, expect } from '@playwright/test';

const queries = ['trace viewer', 'assertions', 'api testing', 'parallel', 'fixtures', 'locators'];

async function openSearchAndGetInput(page) {
  // Try the obvious "Search" button in the header (opens DocSearch modal)
  const searchButton = page.getByRole('button', { name: /search/i }).first();
  if (await searchButton.count()) {
    await searchButton.click();
  } else {
    // Fallback: try the "/" shortcut to open search
    await page.keyboard.press('/');
  }

  // Input inside the DocSearch modal (Algolia)
  let input = page.locator('.DocSearch-Input').first();

  // Fallbacks for different site versions
  if (!(await input.count())) {
    input = page.getByRole('combobox', { name: /search/i }).first();
  }
  if (!(await input.count())) {
    input = page.locator('input[placeholder*="Search"]').first();
  }

  await expect(input).toBeVisible({ timeout: 10000 });
  return input;
}

for (const q of queries) {
  test(`search works for "${q}"`, async ({ page }) => {
    await page.goto('/');

    const input = await openSearchAndGetInput(page);
    await input.fill(q);

    // Wait a bit for suggestions to render
    await page.waitForTimeout(300);

    // Click the first suggestion if it exists, otherwise press Enter
    const firstHit = page.locator('.DocSearch-Hit a').first();
    if (await firstHit.count()) {
      await firstHit.click();
    } else {
      await input.press('Enter');
    }

    // We generally land on a docs page
    await expect(page).toHaveURL(/\/docs\//, { timeout: 15000 });
    await expect(page.getByRole('heading').first()).toBeVisible();
  });
}

