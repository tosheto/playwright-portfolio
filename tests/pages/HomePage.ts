import { Page, expect } from '@playwright/test';
import { SEL } from '../helpers/selectors';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Playwright/i);
  }

  docsLink() {
    return this.page.getByRole(SEL.nav.docs.role, { name: SEL.nav.docs.name });
  }

  async openDocs() {
    await this.docsLink().click();
  }
}



