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

test('it creates a new ssh key', async () => {
  setupFetchStub();

  const payload = {
    name: 'test-key',
    key: 'KEY_CONTENT_HERE',
  };

  const forge = new Forge('API_TOKEN');
  await forge.ssh.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/keys', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all keys on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssh.list(1);

  expectToHaveBeenCalledWith('/servers/1/keys', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given key', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssh.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/keys/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given key', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  const key = await forge.ssh.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/keys/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
