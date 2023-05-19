const landingPage = require("../pageobjects/landingPage");
const loginPage = require("../pageobjects/loginPage");
const resetPage = require("../pageobjects/resetPage");

const user = process.env.WDIO_user;
const pass = process.env.WDIO_pass;

describe("Spotify login", () => {
  beforeEach(async () => {
    await landingPage.navigate();
    landingPage.goToLoginPage();
  });

  it("should login with valid credentials", async () => {
    await loginPage.dologin(user, pass);
    landingPage.shouldHaveUser();
  });

  it("should show an error for wrong user", async () => {
    await loginPage.dologin("Fernando", pass);
    loginPage.shouldHaveErrorMsg("Error");
  });

  it("should show an error for wrong password", async () => {
    await loginPage.dologin(user, "Fernando");
    loginPage.shouldHaveErrorMsg("Error");
  });

  it("should show an error for empty fields", async () => {
    await loginPage.dologin("", "");
    loginPage.shouldHaveErrorMsg("Error");
  });

  it("should show a message for successful password reset", async () => {
    await loginPage.goToResetPassPage();
    await resetPage.doResetPass('bla')
    resetPage.shouldHaveResetMsg('Password Reset')

  });
});
