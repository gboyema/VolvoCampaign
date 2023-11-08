import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

test(`@Volvo Heritage tab`, async ({ safetyPage }) => {
    await test.step(`Navigate to Heritage Tab`, async () => {
        await safetyPage.navigateToURL();
        await safetyPage.acceptCookies();
        await safetyPage.clickOnHeritageTab()
        expect(await safetyPage.HERITAGE_TAB).toBeVisible()
    });
});