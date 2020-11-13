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

test('it creates a monitor', async () => {
  setupFetchStub();

  const payload = {
    type: 'cpu_load',
    operator: 'gte',
    threshold: '1.3',
    minutes: '5',
    notify: 'forge@laravel.com',
  };

  const forge = new Forge('API_TOKEN');
  await forge.monitors.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/monitors', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists a servers monitors', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.monitors.list(1);

  expectToHaveBeenCalledWith('/servers/1/monitors', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a single monitor', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.monitors.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/monitors/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given monitor', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.monitors.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/monitors/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
