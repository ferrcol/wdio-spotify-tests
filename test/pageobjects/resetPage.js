class ResetPage {
  get emailUsernameInput() {return $("input#email_or_username") }
  get sendButton() {return $("button.Button-qlcn5g-0")}
  get headDiv() {return $('class*="PageHeading"]')}

  navigate() {
    return browser.url("/en/password-reset");
  }

  async doResetPass(username) {
    await this.emailUsernameInput.setValue(username);
    await this.sendButton.click();
  }

  shouldHaveResetMsg(message) {
    expect(this.headDiv).toHaveText(message);
  }
}

module.exports = new ResetPage();
