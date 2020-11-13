const {
  setupFetchStub,
  expectToHaveBeenCalledWith,
} = require('./stub/fetchStub');
const Forge = require('../lib/Forge');

beforeAll(() => {
  require('cross-fetch/polyfill');
  jest.spyOn(window, 'fetch');
});

afterEach(() => {
  global.fetch.mockReset();
});

test('it creates a webhook', async () => {
  setupFetchStub();

  const payload = {
    url: 'https://domain.com',
  };

  const forge = new Forge('API_TOKEN');
  await forge.webhooks.create(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/webhooks', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all webhooks', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.webhooks.list(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/webhooks', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given webhook', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.webhooks.get(1, 1, 10);

  expectToHaveBeenCalledWith('/servers/1/sites/1/webhooks/10', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a webhook', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.webhooks.delete(1, 1, 10);

  expectToHaveBeenCalledWith('/servers/1/sites/1/webhooks/10', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
