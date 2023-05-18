class LandingPage {
  get loginButton() {
    return $('button[data-testid="login-button"]');
  }

  navigate() {
    return browser.url(`/`);
  }

  goToLoginPage() {
    this.loginButton.click();
  }

  shouldHaveUser() {
    expect(this.usernameLabel).toBeExisting();
  }
}

module.exports = new LandingPage();
