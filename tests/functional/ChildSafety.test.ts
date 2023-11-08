import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

test(`@Volvo Child Safety tab`, async ({ safetyPage }) => {
    await test.step(`Navigate to Child Safety Tab`, async () => {
        await safetyPage.navigateToURL();
        await safetyPage.acceptCookies();
        await safetyPage.clickOnChildSafetyTab()
        expect(await safetyPage.CHILD_SAFETY_TAB).toBeVisible()
    });
});