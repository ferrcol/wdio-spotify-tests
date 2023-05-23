class LoginPage {
  get usernameInput() { return $("input#login-username") }
  get passwordInput() { return $("input#login-password") }
  get loginButton() { return $("button#login-button")  }
  get bannerDiv() { return $('[data-encore-id="banner"]')}
  get resetPassButton() { return $('[data-testid="reset-password-link"]')}

  navigate() {
    return browser.url(`/en/login`);
  }

  async dologin(user, pass) {
    await this.usernameInput.setValue(user);
    await this.passwordInput.setValue(pass);
    await this.loginButton.click();
  }

  async goToResetPassPage() {
    await this.resetPassButton.click();
  }

  async shouldHaveErrorMsg(errorMsg) {
    await expect(this.bannerDiv).toHaveText(errorMsg);
  }
}

module.exports = new LoginPage();
