class LandingPage {
  get loginButton() { return $('button[data-testid="login-button"]') }
  get userButton() { return $('button[data-testid="user-widget-link"]')} 
  get userName() { return $('figure[data-testid="user-widget-avatar"]')}
  get logoutButton() { return $('button[data-testid="user-widget-dropdown-logout"]') }
  get createPlayListFolderButton() { return $('button[aria-label="Create playlist or folder"]') }
  get contextMenuButton() { return $$('#context-menu button')[0] }

  get playlistList() { return $$('[aria-label="Your Library"] li [role="group"]') }
  get newPlaylistElement() { return $('[aria-label^="My Playlist #"]') }
  get firstListTitle() { return this.playlistList[0].$('[id^="listrow-title-spotify:playlist:"]') }

  get moreOptionsButton() { return $('[data-testid="more-button"]') }
  get contextMenu() { return $('#context-menu') }
  get deleteMenuButton() { return this.contextMenu.$$('button')[3] }

  get deleteButton () { return $('button[aria-label^="Delete "]')}


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

  async createList() {
    await this.createPlayListFolderButton.click();
    await this.contextMenuButton.click();
    await this.newPlaylistElement.waitForDisplayed();
  }

  async deleteList() {
    await this.moreOptionsButton.click()
    await this.contextMenu.waitForDisplayed();
    await this.deleteMenuButton.click()
    await this.deleteButton.click()
    await this.newPlaylistElement.waitForDisplayed({ reverse: true });
  }

  async shouldHaveUser(user) {
    await expect(this.userName).toHaveElementProperty('title', user)
  }

  async shouldHaveNewList() {
    await expect(this.firstListTitle).toHaveTextContaining(/^My Playlist #\d{1,3}$/); 
  }

  async shouldNotHaveNewList() {
    await expect(this.firstListTitle).not.toHaveTextContaining(/^My Playlist #\d{1,3}$/);
  }
}

module.exports = new LandingPage();
