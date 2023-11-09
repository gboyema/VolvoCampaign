import { test as baseTest } from '@playwright/test';
import { SafetyPage } from '@pages/SafetyPage';

const test = baseTest.extend<{
    safetyPage: SafetyPage;
}>({
    safetyPage: async ({ page, context }, use) => {
        await use(new SafetyPage(page, context));
    }
})

export default test;