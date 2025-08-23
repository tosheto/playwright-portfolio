# Todor Stavrev's Playwright Portfolio Project

End-to-end UI tests for [Playwright](https://playwright.dev) using **Playwright**, **TypeScript**, and **Page Object Model (POM)**.  
Includes HTML reporting and a GitHub Actions CI workflow.

---

## Quick start

```bash
npm i
npm run pw:install
npm test
npm run report

---

##CI
GitHub Actions workflow lives in .github/workflows/playwright.yml.

On each push/PR it:

installs dependencies & browsers

runs Playwright tests in headless mode

uploads Playwright HTML report as artifact

(optionally) uploads Allure results for advanced reporting
