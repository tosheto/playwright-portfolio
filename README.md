# 🎭 Todor Stavrev's Playwright Portfolio Project

[![CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Playwright](https://img.shields.io/badge/Playwright-1.46+-green)
[![Reports](https://img.shields.io/badge/📊%20Test%20Reports-Live%20on%20GitHub%20Pages-brightgreen)](https://tosheto.github.io/playwright-portfolio/)
![Algorithms](https://img.shields.io/badge/Algorithms-Ready-informational)
![Blockchain%20QA](https://img.shields.io/badge/Blockchain%20QA-Portfolio-blueviolet)

---

## 🔗 Live Reports

- **Playwright HTML Report** – interactive run details (steps, logs, screenshots):  
  https://tosheto.github.io/playwright-portfolio/playwright-report/index.html
- **Allure Report** – suites, categories, trends & analytics:  
  https://tosheto.github.io/playwright-portfolio/allure-report/index.html

Reports are re-generated on every CI run.

---

## 📖 Overview

This is a **QA portfolio** showcasing:

- ✅ UI tests with **Playwright + TypeScript**
- 🧩 **Page Object Model (POM)** for maintainability
- 🌐 **API tests** using Playwright `APIRequestContext` (GET/POST + assertions)
- 🎞️ **Failure artifacts** on any failed test: **screenshot**, **video**, **trace**
- ⚙️ CI/CD with **GitHub Actions**, reports published to **GitHub Pages**

> Note: Everything (tests, CI and reports) lives in **main** on purpose — simpler to clone, run and review for a portfolio project.

---

## 🚀 Quick start

```bash
npm i
npm run pw:install
npm test
npm run report
npm test 
npm run report 
```
## Бy title
```bash
npx playwright test -g "assertions page shows code block"
```
## 🧪 What’s inside
  - UI specs: tests/specs/*.spec.ts
  - API spec: tests/specs/api.spec.ts
  - Uses request.newContext() + apiContext.get/post(...)
  - Validates status codes + JSON payloads
  - Artifacts demo: tests/specs/artifacts-demo.spec.ts
  - Intentionally fails with test.fail(true, ...) so the run stays ✅ green
  - Generates trace/video/screenshot for demonstration
  - Global settings (retries, trace, screenshot, video) are in playwright.config.ts.

## 📦 Key files

  - playwright.config.ts – baseURL, retries, trace/video/screenshot policy, reporters
  - tests/specs/api.spec.ts – API testing via APIRequestContext (GET/POST)
  - tests/specs/artifacts-demo.spec.ts – expected-fail test that always produces artifacts
  - tests/pages/*.ts – Page Objects (navigation & actions)
  - tests/helpers/selectors.ts – centralized selectors
  - .github/workflows/playwright.yml – CI pipeline (run → collect reports → publish to Pages)

## ⚙️ CI Pipeline

    -  Workflow: .github/workflows/playwright.yml
    - On each push/PR it:
    - Installs deps & Playwright browsers
    - Runs tests headlessly
    - Uploads the Playwright HTML and (optionally) Allure results
    - Publishes static reports to GitHub Pages (see links above)

## 🧑‍💻 Tech notes

  - Selectors: prefer role-based locators; CSS centralized in tests/helpers/selectors.ts
  - Stability: retries + artifacts enabled in config (trace: 'on-first-retry', screenshot: 'only-on-failure', video: 'retain-on-failure')
  - POM: page classes encapsulate flows and assertions
  - Artifacts: download/open traces & videos directly from the Playwright report
