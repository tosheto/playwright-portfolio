# Todor Stavrev's Playwright Portfolio Project

End-to-end UI tests for [Playwright](https://playwright.dev) using **Playwright**, **TypeScript**, and the **Page Object Model (POM)**.  
Includes HTML reporting and a GitHub Actions CI workflow.

---

## Quick start

```bash
npm i
npm run pw:install
npm test
npm run report
This will install dependencies & browsers, run tests headless, and open the Playwright HTML report locally.

CI
GitHub Actions workflow lives in .github/workflows/playwright.yml.

On each push / pull request it:

installs dependencies and Playwright browsers

runs the test suite in headless mode

uploads the Playwright HTML report as an artifact

(optional) can upload Allure results for advanced reporting

Project structure
arduino
Copy
Edit
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
helpers/ – shared, stable locators and utilities

pages/ – Page Object Model (POM) classes

specs/ – test files organized by feature/page

NPM scripts
json
Copy
Edit
"scripts": {
  "pw:install": "npx playwright install --with-deps",
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "test:headed": "playwright test --headed",
  "test:debug": "PWDEBUG=1 playwright test",
  "report": "playwright show-report --port 0"
}
Useful:

npm run test:ui – visual test runner

npm run test:headed – runs with a visible browser

npm run test:debug – opens Playwright inspector

Tech notes
Selectors: prefer role-based locators and centralized CSS in helpers/selectors.ts.

Resilience: retries, traces, screenshots, and videos are enabled in playwright.config.ts.

POM: page classes encapsulate navigation and actions for maintainability.

How to run a specific test
bash
Copy
Edit
npx playwright test tests/specs/docs.spec.ts
# or by title:
npx playwright test -g "assertions page shows code block"
