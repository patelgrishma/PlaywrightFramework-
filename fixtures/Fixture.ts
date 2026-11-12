import {test as base, expect} from '@playwright/test'
import { Dashboard } from '../Pages/Dashboard'
import { LoginPage } from '../Pages/LoginPage'


type MyFixture  = { 
    loginPage :  LoginPage,
    DashboardPage : Dashboard
}

export const test = base.extend<MyFixture> ({

    loginPage:async ({page}, use) => {
        const loginpage = new LoginPage(page)
        await use(loginpage)
    },
    DashboardPage:async ({page}, use) => {
        const DashboardPage = new Dashboard(page)
        await use(DashboardPage)
    }

})

