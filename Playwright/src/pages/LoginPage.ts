import { Locator, Page } from "@playwright/test";
const data = JSON.parse(JSON.stringify(require("../Data/login.json")));

export default class LoginPage {

  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private getButton: Locator;

  constructor(page: Page) {

    this.page = page;
    this.getButton = page.locator("");
    this.usernameInput = page.locator("");
    this.passwordInput = page.locator("");
    this.loginButton = page.locator("");
  }

  async performLogin() {
  }

  /**
   * Clicks the 'Get Help' button and returns the URL of the newly opened page.
  */
  async getUrl(): Promise<string> {
    return "";                    // Return the URL of the new tab
  }
}
