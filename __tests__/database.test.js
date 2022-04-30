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

test('it creates a new mysql database on a given server', async () => {
  setupFetchStub();

  const payload = {
    name: 'forge',
  };

  const forge = new Forge('API_TOKEN');
  await forge.database.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/databases', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it syncs a database on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.database.sync(1);

  expectToHaveBeenCalledWith('/servers/1/databases/sync', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all mysql databases on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.database.list(1);

  expectToHaveBeenCalledWith('/servers/1/databases', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given database on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.database.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/databases/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given database on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.database.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/databases/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
