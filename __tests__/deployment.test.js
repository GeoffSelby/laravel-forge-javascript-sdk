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

test('it enables quick deployment', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deployment.enable(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it disables quick deployment', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deployment.disable(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets the deployment script', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deployment.getScript(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment/script', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates the deployment scipt', async () => {
  setupFetchStub();

  const payload = {
    content: 'CONTENT_OF_THE_SCRIPT',
  };

  const forge = new Forge('API_TOKEN');
  await forge.deployment.updateScript(1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/deployment/script',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deploys the site', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deployment.deploy(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment/deploy', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it resets the deployment status', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deployment.reset(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment/reset', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets the deployment log', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.deployment.log(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/deployment/log', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
