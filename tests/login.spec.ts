// Copyright (c) 2024-2026 Testsmith. All rights reserved.
// See LICENSE for details.

import {test, expect} from '@playwright/test';

test.describe('Login Feature', () => {

    test('Login_comCredenciaisValidas', async ({page}) => {
        await page.goto('');

        await page.locator('[data-test="nav-sign-in"]').click();

        await page.locator('[data-test="email"]').fill(process.env.TEST_USER_EMAIL!);
        await page.locator('[data-test="password"]').fill(process.env.TEST_USER_PASSWORD!);
        await page.locator('[data-test="login-submit"]').click();

        await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    });

    test('Login_comSenhaIncorreta', async ({ page }) => {
        await page.goto('/');
        await page.locator('[data-test="nav-sign-in"]').click();

        await page.locator('[data-test="email"]')
            .fill('customer@practicesoftwaretesting.com');

        await page.locator('[data-test="password"]')
            .fill('senha_incorreta_123');

        await page.locator('[data-test="login-submit"]').click();

        await expect(page).not.toHaveURL(/\/account(?:\/|$)/);
        await expect(page.locator('[data-test="email"]')).toBeVisible();
    });

    test('Login_comEmailInvalido', async ({ page }) => {
        await page.goto('/');
        await page.locator('[data-test="nav-sign-in"]').click();

        await page.locator('[data-test="email"]')
            .fill('email-invalido');

        await page.locator('[data-test="password"]')
            .fill('welcome01');

        await page.locator('[data-test="login-submit"]').click();

        await expect(page.locator('[data-test="email"]')).toBeVisible();
        await expect(page.locator('[data-test="email"]'))
            .toHaveJSProperty('validity.valid', false);
    });

    
    test('Login_comCamposVazios', async ({ page }) => {
        await page.goto('/');
        await page.locator('[data-test="nav-sign-in"]').click();

        await page.locator('[data-test="login-submit"]').click();

        const email = page.locator('[data-test="email"]');
        const password = page.locator('[data-test="password"]');

        await expect(email).toBeVisible();
        await expect(password).toBeVisible();

        await expect(email).toHaveAttribute('aria-invalid', 'true');
        await expect(password).toHaveAttribute('aria-invalid', 'true');

        await expect(email).toHaveValue('');
        await expect(password).toHaveValue('');
    });




});