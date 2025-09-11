# 🎭 Todor Stavrev's Playwright Portfolio Project

[![CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Playwright](https://img.shields.io/badge/Playwright-1.46+-green)
[![Reports](https://img.shields.io/badge/📊%20Test%20Reports-Live%20on%20GitHub%20Pages-brightgreen)](https://tosheto.github.io/playwright-portfolio/)
![Algorithms](https://img.shields.io/badge/Algorithms-Ready-informational)
![Blockchain%20QA](https://img.shields.io/badge/Blockchain%20QA-Portfolio-blueviolet)
## Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/todor-stavrev-7843105b/)



---

## Live Reports

- **Playwright HTML Report** — steps, logs, screenshots, trace links:  
  https://tosheto.github.io/playwright-portfolio/playwright-report/index.html
- **Allure Report** — suites, categories, trends & analytics:  
  https://tosheto.github.io/playwright-portfolio/allure-report/index.html

> Reports are re-generated on every push/PR via GitHub Actions.

---

## What this project tests

| Area | Spec file | What it verifies | Key assertions / notes |
|---|---|---|---|
| **Accessibility (a11y smoke)** | `tests/specs/a11y.smoke.spec.ts` | Presence of core ARIA landmarks on key pages | `banner`, `navigation`, `main`, `footer` on home/docs |
| **Public API (GET/POST)** | `tests/specs/api.spec.ts` | HTTP status codes and JSON payload shape using `jsonplaceholder` | `GET /posts/1` ⇒ 200 + expected fields; `POST /posts` ⇒ 201 + `id` |
| **Artifacts demo** | `tests/specs/artifacts-demo.spec.ts` | How traces, videos and screenshots are collected on failure | Intentionally triggers artifacts for demo purposes |
| **Docs UI** | `tests/specs/docs.spec.ts` | Navigation and headings in the docs section | Page titles, visible sections, basic smoke checks |
| **Home UI** | `tests/specs/home.spec.ts` | Hero/intro, CTAs and structure | `toHaveTitle`, visible elements, navigation |
| **Navbar** | `tests/specs/navbar.spec.ts` | Header/menu links | Visibility + navigation |
| **Footer** | `tests/specs/footer.spec.ts` | Footer links & copyright | Structure + working links |
| **Search** | `tests/specs/search.spec.ts` | Search input and results | Typing queries, results shown |
| **Graph/visuals** | `tests/specs/graph.spec.ts` | Graph/chart rendering | Expected nodes/elements are visible |
| **Code blocks** | `tests/specs/codeblocks.spec.ts` | Code examples render on key pages | At least one code block per page |
| **Example** | `tests/specs/example.spec.ts` | Minimal smoke: title + navigation to iana.org | Basic selector usage with Playwright |

> All UI specs run against the `baseURL` from `playwright.config.ts` across **Chromium / Firefox / WebKit**.

---

## Tech stack

- **Playwright + @playwright/test** (TypeScript)
- **POM (Page Object Model)** — `tests/pages/*` encapsulate selectors + actions
- **Helpers/fixtures** — `tests/helpers/*`, `tests/fixtures/*`
- **Reporters** — `html` + `allure-playwright`
- **Artifacts policy** (in `playwright.config.ts`):  
  `trace: 'on-first-retry'`, `screenshot: 'only-on-failure'`, `video: 'retain-on-failure'`

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
## 🧪 What’s inside

- **UI test specs**: all end-to-end tests live under `tests/specs/*.spec.ts`
- **API tests**: `tests/specs/api.spec.ts` checks GET/POST endpoints and validates JSON responses
- **Artifacts demo**: `tests/specs/artifacts-demo.spec.ts` is designed to fail on purpose, so you can see how Playwright captures:
  - trace files  
  - screenshots  
  - videos
- **Global settings**: retries, trace/screenshot/video policies, and reporters are all configured in `playwright.config.ts`

## ⚙️ CI pipeline (GitHub Actions)

  -  Workflow: .github/workflows/playwright.yml
  - On every push/PR it:
    1. Installs deps & Playwright browsers
    2. Runs the full suite (all projects)
    3. Produces one Allure report report and one Playwright HTML
    4. Publishes static reports to GitHub Pages:
       - /playwright-report/index.html
       - /allure-report/index.html
       - 
### Running specific tests

```bash
# Accessibility only
npx playwright test tests/specs/a11y.smoke.spec.ts

# API only
npx playwright test tests/specs/api.spec.ts

# Match by pattern (docs & home)
npx playwright test "tests/specs/{docs,home}.spec.ts"

# Run headed / debug mode
npm run test:headed
npm run test:debug


## 📦 Artifacts & debugging

  - HTML report: step-by-step log, attachments, screenshots.
  - Trace viewer: open from the HTML report → timeline, console, network.
  - Video: attached on test failure.
  - Allure: suites/categories view + trend charts.
  - 
## 🧑‍💻 Best practices

- **Role-based selectors** for stability (`getByRole`, `getByLabel`, etc.)  
- **Page Object Model (POM)** for reusable navigation/actions (`tests/pages/*`)  
- **Artifacts on failure** — trace, screenshot, video available in HTML report  

