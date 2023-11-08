import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

test(`@Volvo Culture and Vision tab`, async ({ safetyPage }) => {
    await test.step(`Navigate to Culture and vision Tab`, async () => {
        await safetyPage.navigateToURL();
        await safetyPage.acceptCookies();
        await safetyPage.clickOnCultureTab()
        expect(await safetyPage.CULTURE_VISION_TAB).toBeVisible()
    });
});