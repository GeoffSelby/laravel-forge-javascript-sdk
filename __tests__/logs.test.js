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

test('it gets a servers logs', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.logs.get(1, 'php73');

  expectToHaveBeenCalledWith('/servers/1/logs?file=php73', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
