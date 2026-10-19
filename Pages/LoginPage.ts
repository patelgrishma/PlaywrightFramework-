import { Page , Locator } from "@playwright/test";

export class LoginPage
{
    readonly page: Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginBtn : Locator

    constructor(page:Page)
    {
        this.page = page,
        this.usernameInput = page.locator("input[name='username']")
        this.passwordInput = page.locator("input[name='password']")
        this.loginBtn = page.locator("//button[text()='Login']")
    
    }

    async loginUi()
    {
        await this.usernameInput.fill("Admin")
        await this.passwordInput.fill("admin123")
        await this.loginBtn.click

    }


}



