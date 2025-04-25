import { test, expect } from '@playwright/test';

test.describe('Screenshots Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
    });

    test('should take a screenshot of the main page', async ({ page }) => {
        await page.screenshot({ path: 'public/screenshots/fullhomepage.png', fullPage: true })
    });

    test ('check homepage heading', async({page}) => {
        await expect(page.locator('.interface')).toMatchAriaSnapshot(`
    - heading "Corodinsite Jupiterienne"
`);
    });

    test ('check button', async({page}) => {
        await expect(page.locator('.interface')).toMatchAriaSnapshot(`
    - button "Calculer l'heure jupiterienne"
`);
    });

    test('should take a screenshot after calcul', async ({ page }) => {
        const moonInput = page.locator('div').filter({ hasText: /^Cadran de la lune$/ }).getByRole('spinbutton');
        const sunInput = page.locator('div').filter({ hasText: /^Cadran du soleil$/ }).getByRole('spinbutton');
        const earthInput = page.locator('div').filter({ hasText: /^Cadran de la terre$/ }).getByRole('spinbutton');
        const button = page.locator('.calculate-value-button');

        await moonInput.fill('1');
        await sunInput.fill('2');
        await earthInput.fill('1');
        await button.click();

        await page.screenshot({ path: 'public/screenshots/aftercalcul.png', fullPage: true });
    });
});