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

test('it lists credentials', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.credentials.list();

  expectToHaveBeenCalledWith('/credentials', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
