import test from '@lib/BaseTest';

// We can use Steps like in Cucmber format as shown below

test(`@Volvo Navigate to Webpage`, async ({ safetyPage }) => {
    await test.step(`Navigate to webpage and reject cookies`, async () => {
        await safetyPage.navigateToURL();
        await safetyPage.rejectCookies();
    });
});



