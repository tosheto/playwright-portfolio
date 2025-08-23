import { Page, expect } from '@playwright/test';
import { SEL } from '../helpers/selectors';

export class DocsPage {
  constructor(private page: Page) {}

  async expectLoaded() {
    await expect(this.page).toHaveURL(/.*docs/i);
    await expect(this.page.locator(SEL.docs.h1).first()).toBeVisible();
  }

  async openAssertions() {
    await this.page.getByRole(SEL.docs.assertions.role, { name: SEL.docs.assertions.name }).first().click();
  }

  async openTraceViewer() {
    await this.page.getByRole(SEL.docs.traceViewer.role, { name: SEL.docs.traceViewer.name }).first().click();
  }

  async openRunningTests() {
    await this.page.getByRole(SEL.docs.runningTests.role, { name: SEL.docs.runningTests.name }).first().click();
  }

  codeBlock() {
    return this.page.locator(SEL.docs.codeBlock).first();
  }
}
