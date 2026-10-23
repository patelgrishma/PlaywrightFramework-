import {test} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { Dashboard } from "../Pages/Dashboard"  
import * as allure from "allure-js-commons";

test('Login Test', async({page}) => {

    await allure.epic("user Managment")
    await allure.feature("Login")
    await allure.story("Valid user login")
    await allure.severity("criticle")
    await allure.step('Open login page', async ()=> 
    {
        await page.goto("/")
    } )


    

    const loginpg = new LoginPage(page)
    //await loginpg.loginUi("Admin", "admin123")
    await loginpg.loginUi(process.env.TUsername, process.env.Password)


    //const dashboard = new Dashboard(page)
    //await dashboard.navigate("Admin")
    page.pause()

})


