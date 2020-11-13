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

test('it creates a new database user on a given server', async () => {
  setupFetchStub();

  const payload = {
    name: 'forge',
    password: 'dolores',
    databases: [1],
  };

  const forge = new Forge('API_TOKEN');
  await forge.databaseUsers.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/database-users', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all database users on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.databaseUsers.list(1);

  expectToHaveBeenCalledWith('/servers/1/database-users', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given database user on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.databaseUsers.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/database-users/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given users database access list', async () => {
  setupFetchStub();

  const payload = {
    databases: [2],
  };

  const forge = new Forge('API_TOKEN');
  await forge.databaseUsers.update(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/database-users/1', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a database user from a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  const user = await forge.databaseUsers.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/database-users/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
