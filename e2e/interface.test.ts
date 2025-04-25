import { test, expect } from '@playwright/test';

test.describe('E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
    });

    test('should have disabled button when no inputs', async ({ page }) => {
        const button = page.locator('.calculate-value-button');
        const moonInput = page.locator('div').filter({ hasText: /^Cadran de la lune$/ }).getByRole('spinbutton');
        const sunInput = page.locator('div').filter({ hasText: /^Cadran du soleil$/ }).getByRole('spinbutton');
        const earthInput = page.locator('div').filter({ hasText: /^Cadran de la terre$/ }).getByRole('spinbutton');
        await moonInput.fill('');
        await sunInput.fill('');
        await earthInput.fill('');
        await expect(button).toBeDisabled({ timeout: 100000 });
    });

    test('should give 2 as a max value to inputs when user types a bigger number', async ({ page }) => {
        const moonInput = page.locator('div').filter({ hasText: /^Cadran de la lune$/ }).getByRole('spinbutton');
        await moonInput.fill('3');
        await expect(moonInput).toHaveValue('2');
    });

    test('should give 1 as a min value to inputs when user types a smaller number', async ({ page }) => {
        const moonInput = page.locator('div').filter({ hasText: /^Cadran de la lune$/ }).getByRole('spinbutton');
        await moonInput.fill('0');
        await expect(moonInput).toHaveValue('1');
    });

    test('should have result div visible when button is clicked', async ({ page }) => {
        const button = page.locator('.calculate-value-button');
        const resultDiv = page.locator('.result');
        await button.click();
        await expect(resultDiv).toBeVisible({ timeout: 100000 });
    });

    test('should have result div invisible by default', async ({ page }) => {
        const resultDiv = page.locator('.result');
        await expect(resultDiv).not.toBeVisible();
    })
})