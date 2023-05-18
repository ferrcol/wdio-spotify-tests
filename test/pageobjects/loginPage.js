class LoginPage {
  get usernameInput() { return $("input#login-username") }
  get passwordInput() { return $("input#login-password") }
  get loginButton() { return $("button#login-button")  }

  navigate() {
    return browser.url(`/en/login`);
  }

  async dologin(user, pass) {
    await this.usernameInput.setValue(user);
    await this.passwordInput.setValue(pass);
    await this.loginButton.click();
  }

  shouldHaveErrorMsg(errorMsg) {
    domEl.bannerDiv().should("include.text", errorMsg);
  }
}

module.exports = new LoginPage();
