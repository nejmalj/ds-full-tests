import { test, expect } from '@playwright/test';

test.describe('E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
    });


})