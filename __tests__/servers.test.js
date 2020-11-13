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

test('it creates a new server', async () => {
  setupFetchStub();

  const payload = {
    provider: 'ocean2',
    credential_id: 1,
    name: 'test-via-api',
    size: '512MB',
    database: 'test123',
    php_version: 'php71',
    region: 'ams2',
    recipe_id: null,
  };

  const forge = new Forge('API_TOKEN');
  await forge.servers.create(payload);

  expectToHaveBeenCalledWith('/servers', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('api returns list of servers', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.list();

  expectToHaveBeenCalledWith('/servers', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a server by server_id', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.get(1);

  expectToHaveBeenCalledWith('/servers/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a server by server_id with payload', async () => {
  setupFetchStub();

  const payload = {
    name: 'renamed-server',
    size: '512MB',
    ip_address: '192.241.143.108',
    private_ip_address: '10.136.8.40',
    max_upload_size: 123,
    network: [2, 3],
  };

  const forge = new Forge('API_TOKEN');
  await forge.servers.update(1, payload);

  expectToHaveBeenCalledWith('/servers/1', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates database password for legacy servers', async () => {
  setupFetchStub();

  const payload = {
    password: 'newpassword',
  };

  const forge = new Forge('API_TOKEN');
  await forge.servers.updateDbPassword(1, payload);

  expectToHaveBeenCalledWith('/servers/1/database-password', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.delete(1);

  expectToHaveBeenCalledWith('/servers/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reboots a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.reboot(1);

  expectToHaveBeenCalledWith('/servers/1/reboot', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it revokes Forge access to a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.revoke(1);

  expectToHaveBeenCalledWith('/servers/1/revoke', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reconnects a revoked server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.reconnect(1);

  expectToHaveBeenCalledWith('/servers/1/reconnect', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reactivates a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.reactivate(1);

  expectToHaveBeenCalledWith('/servers/1/reactivate', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets recent events for all servers', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.events();

  expectToHaveBeenCalledWith('/servers/events', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets recent events for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.servers.events(1);

  expectToHaveBeenCalledWith('/servers/events?server_id=1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
