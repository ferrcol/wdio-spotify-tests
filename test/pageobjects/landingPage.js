class LandingPage {
  get loginButton() { return $('button[data-testid="login-button"]') }

  navigate() {
    return browser.url(`/`);
  }

  async goToLoginPage() {
    await this.loginButton.click();
  }

  shouldHaveUser() {
    expect(this.usernameLabel).toBeExisting();
  }
}

module.exports = new LandingPage();
