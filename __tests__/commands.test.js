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

test('it executes a command', async () => {
  setupFetchStub();

  const payload = {
    command: 'ls -ls',
  };

  const forge = new Forge('API_TOKEN');
  await forge.commands.execute(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/commands', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('lists command history', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.commands.list(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/commands', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('gets a command by id', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.commands.get(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/commands/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
