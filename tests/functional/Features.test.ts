import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

test(`@Volvo Feature Tab`, async ({ safetyPage }) => {
    await test.step(`Navigate to Feature tab`, async () => {
        await safetyPage.navigateToURL();
        await safetyPage.acceptCookies();
        await safetyPage.clickOnFeaturesTab();
        expect(await safetyPage.FEATURE_TAB).toBeVisible()
    });
});
