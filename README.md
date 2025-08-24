# Todor Stavrev's Playwright Portfolio Project [![Playwright CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Playwright](https://img.shields.io/badge/Playwright-1.46+-green)
[![CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)


End-to-end UI tests for [Playwright](https://playwright.dev) using **Playwright**, **TypeScript**, and the **Page Object Model (POM)**.  
Includes HTML reporting and a GitHub Actions CI workflow.


## Quick start

```bash
npm i
npm run pw:install
npm test
npm run report           

            CI

GitHub Actions workflow lives in .github/workflows/playwright.yml.
On each push / pull request it:
installs dependencies and Playwright browsers
runs the test suite in headless mode
uploads the Playwright HTML report as an artifact
(optional) can upload Allure results for advanced reporting

            Project structure

tests/
  helpers/
    selectors.ts
  pages/
    HomePage.ts
    DocsPage.ts
  specs/
    home.spec.ts
    docs.spec.ts
    codeblocks.spec.ts
playwright.config.ts
tsconfig.json

                NPM scripts
{
  "scripts": {
    "pw:install": "npx playwright install --with-deps",
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:headed": "playwright test --headed",
    "test:debug": "PWDEBUG=1 playwright test",
    "report": "playwright show-report --port 0"
  }
}
                  Useful:

npm run test:ui – visual test runner

npm run test:headed – runs with a visible browser

npm run test:debug – opens the Playwright inspector

                  Tech notes

Selectors: prefer role-based locators; centralize CSS in tests/helpers/selectors.ts.

Resilience: retries, traces, screenshots, and videos are enabled in playwright.config.ts.

POM: page classes encapsulate navigation and actions for maintainability.

            Run a specific test
# by file
npx playwright test tests/specs/docs.spec.ts

# or by title
npx playwright test -g "assertions page shows code block"
