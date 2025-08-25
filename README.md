# Playwright Portfolio

[![CI](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)
](https://github.com/tosheto/playwright-portfolio/actions/workflows/playwright.yml)  
[![Reports](https://img.shields.io/badge/Test%20Reports-GitHub%20Pages-blue)](https://tosheto.github.io/playwright-portfolio/)  

---

## 🔗 Live Reports

👉 [**View the latest reports here**](https://tosheto.github.io/playwright-portfolio/)  

- **Playwright HTML Report** – interactive run details (steps, logs, screenshots).  
- **Allure HTML Report** – advanced analytics (suites, categories, history, trends).  

Reports are automatically updated after every successful GitHub Actions run.

---

## 📖 Project Overview

This portfolio project demonstrates **end-to-end UI testing** with  
[Playwright](https://playwright.dev/), **TypeScript**, and the **Page Object Model (POM)** pattern.  

It is designed as a **QA showcase** to present:  
- Modern test automation with Playwright.  
- Structured Page Object Models.  
- Multiple reporting integrations (Playwright + Allure).  
- CI/CD with GitHub Actions and publishing results to GitHub Pages.  

---

## 🚀 Quick start (local run)

```bash
npm install
npx playwright install
npm test
npm run report
npm test → runs the tests with configured reporters.

npm run report → opens the Playwright HTML report locally.

⚙️ CI / CD Workflow
Workflow file: .github/workflows/playwright.yml

On each push or pull_request:

Installs dependencies and Playwright browsers.

Runs the tests in headless mode.

Publishes reports to GitHub Pages → live reports.

📂 Project structure
bash
Copy
Edit
tests/              # Test specs
tests/pages/        # Page Object Models
tests/fixtures/     # Fixtures and utilities
playwright.config.ts
ℹ️ Notes
📌 Everything (tests + CI + reports) is kept in the main branch for simplicity.
This is intentional – since this repo is a QA portfolio project, the goal is to make it easy to clone, run and demonstrate without extra branching complexity.
