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

test('it creates a new daemon on a given server', async () => {
  setupFetchStub();

  const payload = {
    command: 'COMMAND',
    user: 'root',
  };

  const forge = new Forge('API_TOKEN');
  await forge.daemons.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/daemons', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all daemons on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.daemons.list(1);

  expectToHaveBeenCalledWith('/servers/1/daemons', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given daemon from a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.daemons.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/daemons/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given daemon from a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.daemons.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/daemons/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it restarts a given daemon on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.daemons.restart(1, 1);

  expectToHaveBeenCalledWith('/servers/1/daemons/1/restart', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
