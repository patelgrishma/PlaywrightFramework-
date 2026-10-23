import { Page, Locator, expect } from '@playwright/test';

export class CommonActions
{
    constructor(private page: Page){}
    

    async enterText(pageLocator:Locator,value:String):Promise<void>
    {
        await pageLocator.fill(value);
    }
    

}
