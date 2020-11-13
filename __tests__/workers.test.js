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

test('it creates a new worker', async () => {
  setupFetchStub();

  const payload = {
    connection: 'sqs',
    timeout: 90,
    sleep: 60,
    tries: null,
    processes: 1,
    daemon: true,
  };

  const forge = new Forge('API_TOKEN');
  await forge.workers.create(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/workers', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all workers for a given site', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.workers.list(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/workers', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given worker', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.workers.get(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/workers/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given worker', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.workers.delete(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/workers/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it restarts a given worker', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.workers.restart(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/workers/1/restart', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
