class LandingPage {
  get loginButton() { return $('button[data-testid="login-button"]') }
  get userButton() { return $('button[data-testid="user-widget-link"]')} 
  get userName() { return $('figure[data-testid="user-widget-avatar"]')}
  get logoutButton() { return $('button[data-testid="user-widget-dropdown-logout"]') }


  navigate() {
    return browser.url(`/`);
  }

  async goToLoginPage() {
    await this.loginButton.click();
  }

  async doLogout() {
    await this.userButton.click()
    await this.logoutButton.click()
  }

  async shouldHaveUser(user) {
    await expect(this.userName).toHaveElementProperty('title',user)
  }
}

module.exports = new LandingPage();
