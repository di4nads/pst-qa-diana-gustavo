
import { test, expect } from '@playwright/test';

test.describe('Testes do carrinho', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const produto = page.locator('[data-test="product-name"]').first();

    await expect(produto).toBeVisible();
    await produto.click();

    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  });

  test('Carrinho_adicionarProduto', async ({ page }) => {
    const nomeProduto = (
      await page.locator('[data-test="product-name"]').innerText()
    ).trim();

    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();

    await expect(
      page.getByRole('cell', { name: nomeProduto, exact: true })
    ).toBeVisible();
  });

  test('Carrinho_adicionarDuasUnidades', async ({ page }) => {
    await page.locator('[data-test="quantity"]').fill('2');
    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    await expect(
      page.locator('[data-test="product-quantity"]')
    ).toHaveValue('2');
  });

  test('Carrinho_removerProduto', async ({ page }) => {
    const nomeProduto = (
      await page.locator('[data-test="product-name"]').innerText()
    ).trim();

    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();

    const linhaProduto = page.getByRole('row').filter({
      has: page.getByRole('cell', {
        name: nomeProduto,
        exact: true
      })
    });

    await expect(linhaProduto).toBeVisible();

    await linhaProduto.locator('a').click();

    await expect(linhaProduto).toHaveCount(0);
  });

  test('Carrinho_validarSubtotal', async ({ page }) => {
    const precoTexto = await page
      .locator('[data-test="unit-price"]')
      .innerText();

    const preco = Number(
      precoTexto.replace(/[^0-9.,]/g, '').replace(',', '.')
    );

    expect(Number.isFinite(preco)).toBeTruthy();

    await page.locator('[data-test="quantity"]').fill('2');
    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();

    const quantidade = page.locator('[data-test="product-quantity"]');

    await expect(quantidade).toHaveValue('2');

    const subtotalTexto = await page
      .locator('[data-test="cart-total"]')
      .innerText();

    const subtotal = Number(
      subtotalTexto.replace(/[^0-9.,]/g, '').replace(',', '.')
    );

    expect(Number.isFinite(subtotal)).toBeTruthy();
    expect(subtotal).toBeCloseTo(preco * 2, 2);
  });
});
