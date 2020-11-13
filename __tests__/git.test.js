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

test('it installs a new repository', async () => {
  setupFetchStub();

  const payload = {
    provider: 'github',
    repository: 'username/respository',
    branch: 'master',
  };

  const forge = new Forge('API_TOKEN');
  await forge.git.install(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/git', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a repository', async () => {
  setupFetchStub();

  const payload = {
    provider: 'github',
    repository: 'username/respository',
    branch: 'master',
  };

  const forge = new Forge('API_TOKEN');
  await forge.git.update(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/sites/1/git', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it removes a repository', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.git.remove(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/git', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
