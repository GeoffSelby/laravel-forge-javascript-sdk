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

test('it creates a new site on a given server', async () => {
  setupFetchStub();

  const payload = {
    domain: 'site.com',
    project_type: 'php',
    directory: '/test',
  };

  const forge = new Forge('API_TOKEN');
  await forge.sites.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all sites on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.sites.list(1);

  expectToHaveBeenCalledWith('/servers/1/sites', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given site on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.sites.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given sites path on a given server', async () => {
  setupFetchStub();

  const payload = {
    directory: '/some/path',
    name: 'updated-site.com',
  };

  const forge = new Forge('API_TOKEN');
  await forge.sites.update(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a site from a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.sites.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given load balancers server list', async () => {
  setupFetchStub();

  const payload = {
    servers: [2, 3],
  };

  const forge = new Forge('API_TOKEN');
  await forge.sites.balance(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/balancing', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it changes php version', async () => {
  setupFetchStub();

  const payload = {
    version: 'php74',
  };

  const forge = new Forge('API_TOKEN');
  await forge.sites.php(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/php', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it adds site aliases', async () => {
  setupFetchStub();

  const payload = {
    aliases: ['alias1.com', 'alias2.com'],
  };

  const forge = new Forge('API_TOKEN');
  await forge.sites.alias(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/aliases', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a sites log', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.sites.log(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/logs', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
