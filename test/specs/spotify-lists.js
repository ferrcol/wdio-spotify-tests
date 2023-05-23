const landingPage = require("../pageobjects/landingPage");
const loginPage = require("../pageobjects/loginPage");

const user = process.env.WDIO_user;
const pass = process.env.WDIO_pass;

describe ("Spotify lists",() => {

    before( async () =>{
        await landingPage.navigate();
        await landingPage.acceptCookies();
        await landingPage.goToLoginPage();
        await loginPage.dologin(user, pass);
        await landingPage.shouldHaveUser(user);
    });

    it("should create list successfully", async () => {
        await landingPage.createList();
        await landingPage.shouldHaveNewList();
    });

    it("should delete list successfully", async () => {
        await landingPage.deleteList();
        await landingPage.shouldNotHaveNewList();
    });

});