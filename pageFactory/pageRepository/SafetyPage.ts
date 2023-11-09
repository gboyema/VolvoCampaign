import { Page, BrowserContext, Locator, expect } from '@playwright/test';


export class SafetyPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly ACCEPT_COOKIES: Locator;
    readonly REJECT_COOKIES: Locator;
    readonly CULTURE_VISION_TAB: Locator;
    readonly FEATURE_TAB: Locator;
    readonly HERITAGE_TAB: Locator;
    readonly RESEARCH_TAB: Locator;
    readonly CHILD_SAFETY_TAB: Locator;
    readonly HIGHLIGHTS_TAB: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.ACCEPT_COOKIES = page.locator("#onetrust-accept-btn-handler");
        this.REJECT_COOKIES = page.locator("#onetrust-reject-all-handler");
        this.CULTURE_VISION_TAB = page.locator(
        "[data-autoid='localSubMenu:links:culture&vision']"
        );
        this.FEATURE_TAB = page.locator(
        "[data-autoid='localSubMenu:links:features']"
        );
        this.HERITAGE_TAB = page.locator(
        "[data-autoid='localSubMenu:links:heritage']"
        );
        this.RESEARCH_TAB = page.locator(
        "[data-autoid='localSubMenu:links:research']"
        );
        this.HIGHLIGHTS_TAB = page.locator(
        "[data-autoid='localSubMenu:links:highlights']"
        );
        this.CHILD_SAFETY_TAB = page.locator(
        "[data-autoid='localSubMenu:links:childsafety']"
        );
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        
    }

    async acceptCookies(): Promise<void> {
        await this.ACCEPT_COOKIES.click()
    }

    async rejectCookies(): Promise<void> {
        await this.REJECT_COOKIES.click()
    }

    async clickOnCultureTab(): Promise<void> {
        await this.CULTURE_VISION_TAB.click();
    }
    async clickOnFeaturesTab(): Promise<void> {
        await this.FEATURE_TAB.click();
    }
    async clickOnHeritageTab(): Promise<void> {
        await this.HERITAGE_TAB.click();
    }
    async clickOnResearchTab(): Promise<void> {
        await this.RESEARCH_TAB.click();
    }
    async clickOnChildSafetyTab(): Promise<void> {
        await this.CHILD_SAFETY_TAB.click();
    }
    async clickOnHighlightsTab(): Promise<void> {
        await this.HIGHLIGHTS_TAB.click();
    }

    
}