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

test('it gets a given sites Nginx config', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.config.getNginx(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/nginx', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given Nginx config', async () => {
  setupFetchStub();

  const payload = {
    content: 'CONTENT',
  };

  const forge = new Forge('API_TOKEN');
  await forge.config.updateNginx(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/nginx', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given sites .env file', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.config.getEnv(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/env', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given .env file', async () => {
  setupFetchStub();

  const payload = {
    content: 'CONTENT',
  };

  const forge = new Forge('API_TOKEN');
  await forge.config.updateEnv(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/env', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
