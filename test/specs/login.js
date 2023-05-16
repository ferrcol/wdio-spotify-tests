const user = process.env.WDIO_user;
const pass = process.env.WDIO_pass;

describe('Spotify login', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`/`)

        await $('button[data-testid="login-button"]').click()
        
        await $('input#login-username').setValue(user)
        await $('input#login-password').setValue(pass)
        await $('button#login-button').click()

        await expect($('[data-testid="user-widget-avatar"],[title="]')).toBeExisting()

    })
})
