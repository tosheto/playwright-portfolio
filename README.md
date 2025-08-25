# 🎭 Todor Stavrev's Playwright Portfolio Project

[![CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Playwright](https://img.shields.io/badge/Playwright-1.46+-green)
[![Reports](https://img.shields.io/badge/📊%20Test%20Reports-Live%20on%20GitHub%20Pages-brightgreen)](https://tosheto.github.io/playwright-portfolio/)

---

## 🔗 Live Reports

👉 [**View the latest reports here**](https://tosheto.github.io/playwright-portfolio/)  

- [Playwright HTML Report](https://tosheto.github.io/playwright-portfolio/playwright-report/index.html) – interactive run details (steps, logs, screenshots).  
- [Allure HTML Report](https://tosheto.github.io/playwright-portfolio/allure-report/index.html) – advanced analytics (suites, categories, history, trends).  

Reports are regenerated automatically after every CI run.  

---

## 📖 Project Overview

This project demonstrates **end-to-end UI tests** with:  
- [Playwright](https://playwright.dev/)  
- **TypeScript**  
- **Page Object Model (POM)**  

It serves as a **QA portfolio showcase**:  
- Modern Playwright test automation  
- Page Object Models for maintainability  
- Multiple reporting integrations (Playwright + Allure)  
- CI/CD with GitHub Actions + GitHub Pages  

---

## 🚀 Quick start

```bash
npm i
npm run pw:install
npm test
npm run report
npm test → run the full test suite.

npm run report → open the Playwright HTML report locally.

⚙️ CI Workflow
The GitHub Actions workflow lives in .github/workflows/playwright.yml.
On each push / PR it will:

Install dependencies and Playwright browsers.

Run the tests in headless mode.

Publish reports to GitHub Pages → Live reports.

📂 Project structure

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

📜 NPM scripts

{
  "pw:install": "npx playwright install --with-deps",
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "test:headed": "playwright test --headed",
  "test:debug": "PWDEBUG=1 playwright test",
  "report": "playwright show-report --port 0"
}
npm run test:ui – visual test runner

npm run test:headed – runs with a visible browser

npm run test:debug – opens the Playwright inspector

🧑‍💻 Tech notes
Selectors: prefer role-based locators; CSS kept in tests/helpers/selectors.ts.

Resilience: retries, traces, screenshots & videos are enabled in playwright.config.ts.

POM: page classes encapsulate navigation and actions.

🎯 Run a specific test

# by file
npx playwright test tests/specs/docs.spec.ts

# by title
npx playwright test -g "assertions page shows code block"
