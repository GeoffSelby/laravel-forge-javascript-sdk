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

test('it creates a new firewall rule for a given server', async () => {
  setupFetchStub();

  const payload = {
    name: 'rule name',
    ip_address: '192.168.1.1',
    port: 88,
  };

  const forge = new Forge('API_TOKEN');
  await forge.firewallRules.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/firewall-rules', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all firewall rules for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.firewallRules.list(1);

  expectToHaveBeenCalledWith('/servers/1/firewall-rules', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given firewall rule for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.firewallRules.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/firewall-rules/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given rule for a given server', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.firewallRules.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/firewall-rules/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
