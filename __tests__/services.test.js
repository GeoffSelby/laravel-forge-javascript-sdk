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

test('it starts a service', async () => {
  setupFetchStub();

  const payload = {
    service: 'service-name',
  };

  const forge = new Forge('API_TOKEN');
  await forge.services.startService(1, payload);

  expectToHaveBeenCalledWith('/servers/1/services/start', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it stops a service', async () => {
  setupFetchStub();

  const payload = {
    service: 'service-name',
  };

  const forge = new Forge('API_TOKEN');
  await forge.services.stopService(1, payload);

  expectToHaveBeenCalledWith('/servers/1/services/stop', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it restarts a service', async () => {
  setupFetchStub();

  const payload = {
    service: 'service-name',
  };

  const forge = new Forge('API_TOKEN');
  await forge.services.restartService(1, payload);

  expectToHaveBeenCalledWith('/servers/1/services/restart', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reboots mysql on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.rebootMysql(1);

  expectToHaveBeenCalledWith('/servers/1/mysql/reboot', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it stops mysql on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.stopMysql(1);

  expectToHaveBeenCalledWith('/servers/1/mysql/stop', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reboots nginx on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.rebootNginx(1);

  expectToHaveBeenCalledWith('/servers/1/nginx/reboot', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it stops nginx on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.stopNginx(1);

  expectToHaveBeenCalledWith('/servers/1/nginx/stop', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it tests nginx on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.testNginx(1);

  expectToHaveBeenCalledWith('/servers/1/nginx/test', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reboots postgres on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.rebootPostgres(1);

  expectToHaveBeenCalledWith('/servers/1/postgres/reboot', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it stops postgres on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.stopPostgres(1);

  expectToHaveBeenCalledWith('/servers/1/postgres/stop', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it reboots PHP on a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.rebootPhp(1);

  expectToHaveBeenCalledWith('/servers/1/php/reboot', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it installs Blackfire on a given server', async () => {
  setupFetchStub();

  const payload = {
    server_id: 'SAMPLE ID',
    server_token: 'SAMPLE TOKEN',
  };

  const forge = new Forge('API_TOKEN');
  await forge.services.installBlackfire(1, payload);

  expectToHaveBeenCalledWith('/servers/1/blackfire/install', 'POST', payload);
});

test('it removes blackfire from a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.removeBlackfire(1);

  expectToHaveBeenCalledWith('/servers/1/blackfire/remove', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it installs Papertrail on a given server', async () => {
  setupFetchStub();

  const payload = {
    host: '192.241.143.108',
  };

  const forge = new Forge('API_TOKEN');
  await forge.services.installPapertrail(1, payload);

  expectToHaveBeenCalledWith('/servers/1/papertrail/install', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it removes Papertrail from a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.services.removePapertrail(1);

  expectToHaveBeenCalledWith('/servers/1/papertrail/remove', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
