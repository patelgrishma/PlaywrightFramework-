import { test } from '@playwright/test'
import {Dashboard } from '../Pages/Dashboard'

test('Dashboard screen', async({page}) => {
    const Dashboardpage = new Dashboard(page)
    Dashboardpage.getSidebarItem

});
