import { test as baseTest } from '@playwright/test';
import { SafetyPage } from '@pages/SafetyPage';
// import { ElementsPage } from '@pages/ElementsPage';
// import { AlertsFrameWindowsPage } from '@pages/AlertsFrameWindowsPage';
// import { WidgetsPage } from '@pages/WidgetsPage';
// import { InteractionsPage } from '@pages/InteractionsPage';
// import { WebActions } from '@lib/WebActions';

const test = baseTest.extend<{
    safetyPage: SafetyPage;
}>({
    safetyPage: async ({ page, context }, use) => {
        await use(new SafetyPage(page, context));
    }
})

export default test;