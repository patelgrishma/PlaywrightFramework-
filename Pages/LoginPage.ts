import { Page , Locator } from "@playwright/test";


export class LoginPage
{
    //Declaration of variables
    readonly page: Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginBtn : Locator

    constructor(page:Page)
    {
        //Constructor to map page object
        this.page = page,
        this.usernameInput = page.locator("//input[@name='username']")
        this.passwordInput = page.locator("//input[@name='password']")
        this.loginBtn = page.locator("button[type='submit']")
    
    }

    async loginUi(Username : any, Password : any )
    {
        await this.usernameInput.fill(Username)
        await this.passwordInput.fill(Password)
        await this.loginBtn.click()

    }

    

}



