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

test('it creates an nginx template', async () => {
  setupFetchStub();

  const payload = {
    name: 'My Nginx Template',
    content: 'server { listen {{ PORT }}; location = / { ... } }',
  };

  const forge = new Forge('API_TOKEN');
  await forge.nginxTemplates.create(1, payload);

  expectToHaveBeenCalledWith('/servers/1/nginx/templates', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all nginx templates', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.nginxTemplates.list(1);

  expectToHaveBeenCalledWith('/servers/1/nginx/templates', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets the default nginx template', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.nginxTemplates.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/nginx/templates/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a nginx template', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.nginxTemplates.get(1, 1);

  expectToHaveBeenCalledWith('/servers/1/nginx/templates/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a nginx template', async () => {
  setupFetchStub();

  const payload = {
    name: 'My Nginx Template',
    content: 'server { listen {{ PORT }}; location = / { ... } }',
  };

  const forge = new Forge('API_TOKEN');
  await forge.nginxTemplates.update(1, 1, payload);

  expectToHaveBeenCalledWith('/servers/1/nginx/templates/1', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a nginx template', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.nginxTemplates.delete(1, 1);

  expectToHaveBeenCalledWith('/servers/1/nginx/templates/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
