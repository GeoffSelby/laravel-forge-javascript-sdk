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

test('it lists deployment history', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deploymentHistory.list(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment-history', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a deployment', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deploymentHistory.get(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment-history/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets the output of a deployment', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deploymentHistory.output(1, 1, 1);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/deployment-history/1/output',
    'GET',
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
