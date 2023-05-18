const landingPage = require("../pageobjects/landingPage");
const loginPage = require("../pageobjects/loginPage");

const user = process.env.WDIO_user;
const pass = process.env.WDIO_pass;

describe("Spotify login", () => {
  it("should login with valid credentials", async () => {
    await landingPage.navigate();
    await landingPage.goToLoginPage();

    await loginPage.dologin(user, pass);

    await landingPage.shouldHaveUser();
  });
});
