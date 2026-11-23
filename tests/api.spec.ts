
import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test.describe('Testes de API', () => {
  test('API_listarProdutos', async ({ request }) => {
    const response = await request.get(`${API_URL}/products`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toBeDefined();
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('API_buscarProdutoInexistente', async ({ request }) => {
    const response = await request.get(
      `${API_URL}/products/00000000-0000-0000-0000-000000000000`
    );

    expect(response.status()).toBe(404);
  });

  test('API_validarDadosDosProdutos', async ({ request }) => {
    const response = await request.get(`${API_URL}/products`);

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    const produto = body.data[0];

    expect(produto).toHaveProperty('id');
    expect(produto).toHaveProperty('name');
    expect(produto).toHaveProperty('price');

    expect(typeof produto.name).toBe('string');
    expect(typeof produto.price).toBe('number');
  });
});
