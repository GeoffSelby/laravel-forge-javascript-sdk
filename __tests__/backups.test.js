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

test('it creates a backup config', async () => {
  setupFetchStub();

  const payload = {
    provider: 'spaces',
    credentials: {
      endpoint: 'https://my-endpoint.com',
      region: 'region-key',
      bucket: 'bucket-name',
      access_key: '',
      secret_key: '',
    },
    frequency: {
      type: 'weekly',
      time: '12:30',
      day: 1,
    },
    directory: 'backups/server/db',
    email: 'forge@laravel.com',
    retention: 7,
    databases: [24],
  };

  const forge = new Forge('API_TOKEN');
  await forge.backups.createConfig(1, payload);

  expectToHaveBeenCalledWith('/servers/1/backup-configs', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all backup configs', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.backups.listConfigs(1);

  expectToHaveBeenCalledWith('/servers/1/backup-configs', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a single backup config', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.backups.getConfig(1, 1);

  expectToHaveBeenCalledWith('/servers/1/backup-configs/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given backup config', async () => {
  setupFetchStub();

  const payload = {
    provider: 'spaces',
    credentials: {
      endpoint: 'https://my-endpoint.com',
      region: 'region-key',
      bucket: 'bucket-name',
      access_key: '',
      secret_key: '',
    },
    frequency: {
      type: 'weekly',
      time: '12:30',
      day: 1,
    },
    directory: 'backups/server/db',
    email: 'forge@laravel.com',
    retention: 7,
    databases: [24],
  };

  const forge = new Forge('API_TOKEN');
  await forge.backups.updateConfig(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/backup-configs/1', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given backup config', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.backups.deleteConfig(1, 1);

  expectToHaveBeenCalledWith('/servers/1/backup-configs/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it runs a given backup config', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.backups.runConfig(1, 1);

  expectToHaveBeenCalledWith('/servers/1/backup-configs/1', 'POST');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it restores a backup', async () => {
  setupFetchStub();

  const payload = {
    database: 7,
  };

  const forge = new Forge('API_TOKEN');
  await forge.backups.restore(1, 1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/backup-configs/1/backups/1',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a backup', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.backups.delete(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/backup-configs/1/backups/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
