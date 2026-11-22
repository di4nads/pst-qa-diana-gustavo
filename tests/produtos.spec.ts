
import { test, expect } from '@playwright/test';

test.describe('Testes de produtos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Produtos_exibirListagem', async ({ page }) => {
    const produtos = page.locator('[data-test="product-name"]');

    await expect(produtos.first()).toBeVisible();
    expect(await produtos.count()).toBeGreaterThan(0);
  });

  test('Produtos_pesquisarProduto', async ({ page }) => {
    const pesquisa = page.locator('[data-test="search-query"]');

    await pesquisa.fill('hammer');
    await page.locator('[data-test="search-submit"]').click();

    const produtos = page.locator('[data-test="product-name"]');

    await expect(produtos.first()).toBeVisible();
    await expect(produtos.first()).toContainText(/hammer/i);
  });

  test('Produtos_visualizarDetalhes', async ({ page }) => {
    const primeiroProduto = page.locator('[data-test="product-name"]').first();

    await expect(primeiroProduto).toBeVisible();
    const nomeProduto = (await primeiroProduto.innerText()).trim();

    await primeiroProduto.click();

    await expect(page).toHaveURL(/\/product\//);
    await expect(page.locator('[data-test="product-name"]')).toContainText(nomeProduto);
    await expect(page.locator('[data-test="unit-price"]')).toBeVisible();
  });
});
