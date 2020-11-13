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

test('it installs Wordpress', async () => {
  setupFetchStub();

  const payload = {
    database: 'forge',
    user: 1,
  };

  const forge = new Forge('API_TOKEN');
  await forge.wordpress.install(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/wordpress', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it uninstalls Wordpress', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.wordpress.uninstall(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/wordpress', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
