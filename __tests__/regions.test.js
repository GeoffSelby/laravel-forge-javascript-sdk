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

test('it lists regions', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.regions.list();

  expectToHaveBeenCalledWith('/regions', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
