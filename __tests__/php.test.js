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

test('it lists PHP versions installed on a server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.php.list(1);

  expectToHaveBeenCalledWith('/servers/1/php', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it installs a php version', async () => {
  setupFetchStub();

  const payload = {
    version: 'php74',
  };

  const forge = new Forge('API_TOKEN');
  await forge.php.install(1, payload);

  expectToHaveBeenCalledWith('/servers/1/php', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates Php version on a given server', async () => {
  setupFetchStub();

  const payload = {
    version: 'php74',
  };

  const forge = new Forge('API_TOKEN');
  await forge.php.update(1, payload);

  expectToHaveBeenCalledWith('/servers/1/php/update', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it enables OPCache on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.php.enableOPCache(1);

  expectToHaveBeenCalledWith('/servers/1/php/opcache', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it disables OPCache on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.php.disableOPCache(1);

  expectToHaveBeenCalledWith('/servers/1/php/opcache', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
