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

test('it creates a new redirect rule', async () => {
  setupFetchStub();

  const payload = {
    from: '/docs',
    to: '/docs/1.1',
    type: 'redirect',
  };

  const forge = new Forge('API_TOKEN');
  await forge.redirect.create(1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/redirect-rules',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all rules for a given site', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.redirect.list(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/redirect-rules', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given rule', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.redirect.get(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/redirect-rules/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given rule', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.redirect.delete(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/redirect-rules/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
