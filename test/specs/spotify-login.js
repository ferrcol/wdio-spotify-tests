const landingPage = require("../pageobjects/landingPage");
const loginPage = require("../pageobjects/loginPage");
const resetPage = require("../pageobjects/resetPage");

const user = process.env.WDIO_user;
const pass = process.env.WDIO_pass;

describe("Spotify login",() => {
    beforeEach(async () => {
      await browser.reloadSession();
      await landingPage.navigate();
      await landingPage.goToLoginPage();
    });

    it("should login with valid credentials", async () => {
      await loginPage.dologin(user, pass);
      await landingPage.shouldHaveUser(user);
      await landingPage.doLogout();
    });

    it("should show an error for wrong user", async () => {
      await loginPage.dologin("Fernando", pass);
      await loginPage.shouldHaveErrorMsg("Incorrect username or password.");
    });

    it("should show an error for wrong password", async () => {
      await loginPage.dologin(user, "Fernando");
      await loginPage.shouldHaveErrorMsg("Incorrect username or password.");
    });

    it("should show an error for empty fields", async () => {
      await loginPage.dologin("", "");
      await loginPage.shouldHaveErrorMsg("Incorrect username or password.");
    });

    it("should show a message for successful password reset", async () => {
      await loginPage.goToResetPassPage();
      await resetPage.doResetPass("bla");
      await resetPage.shouldHaveResetMsg("Password Reset");
    });
  }
);
