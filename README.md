[![Playwright CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)

name: Playwright CI

on:
  push:
    branches: [ main, master ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Install browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test

      - name: Upload Playwright HTML report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-html-report
          path: playwright-report/
          if-no-files-found: ignore
          retention-days: 7

      # Optional: Allure integration
      - name: Run tests with Allure reporter (optional)
        if: always()
        run: npx playwright test --reporter=line,allure-playwright || true

      - name: Upload Allure results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: allure-results
          path: allure-results/
          if-no-files-found: ignore
          retention-days: 7
