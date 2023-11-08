import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

test(`@Volvo Research tab`, async ({ safetyPage }) => {
    await test.step(`Navigate to Research Tab`, async () => {
        await safetyPage.navigateToURL();
        await safetyPage.acceptCookies();
        await safetyPage.clickOnResearchTab()
        expect(await safetyPage.RESEARCH_TAB).toBeVisible()
    });
});