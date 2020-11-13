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

test('it creates a new job on a given server', async () => {
  setupFetchStub();

  const payload = {
    command: 'COMMAND',
    frequency: 'nightly',
  };

  const forge = new Forge('API_TOKEN');
  await forge.jobs.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/jobs', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all jobs for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.jobs.list(1);

  expectToHaveBeenCalledWith('/servers/1/jobs', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given job for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.jobs.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/jobs/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given job for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  const job = await forge.jobs.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/jobs/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
