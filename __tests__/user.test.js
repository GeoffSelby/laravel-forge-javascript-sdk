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

test('it gets user information', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.user.get();

  expectToHaveBeenCalledWith('/user', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
