import {test} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"

test('Login Test', async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const loginpg = new LoginPage(page)
    loginpg.loginUi()

})

