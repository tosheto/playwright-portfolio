import { test, expect, request, APIRequestContext } from '@playwright/test';

let api: APIRequestContext;

test.beforeAll(async () => {
  // create isolated API context with a base URL
  api = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
});

test.afterAll(async () => {
  await api.dispose();
});

test('GET /posts/1 returns 200 and valid data', async () => {
  const response = await api.get('/posts/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('title');
});

test('POST /posts creates a new resource', async () => {
  const response = await api.post('/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });
  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body).toHaveProperty('id');       // jsonplaceholder returns a fake id
  expect(body.title).toBe('foo');
});
