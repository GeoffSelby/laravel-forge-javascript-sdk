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

test('it creates a new recipe', async () => {
  setupFetchStub();

  const payload = {
    name: 'Recipe Name',
    user: 'root',
    script: 'SCRIPT_CONTENT',
  };

  const forge = new Forge('API_TOKEN');
  await forge.recipes.create(payload);

  expectToHaveBeenCalledWith('/recipes', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all recipes', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.recipes.list();

  expectToHaveBeenCalledWith('/recipes', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given recipe', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.recipes.get(1);

  expectToHaveBeenCalledWith('/recipes/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it updates a given recipe', async () => {
  setupFetchStub();

  const payload = {
    name: 'Recipe Name',
    user: 'root',
    script: 'SCRIPT_CONTENT',
  };

  const forge = new Forge('API_TOKEN');
  await forge.recipes.update(1, payload);

  expectToHaveBeenCalledWith('/recipes/1', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a given recipe', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.recipes.delete(1);

  expectToHaveBeenCalledWith('/recipes/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it runs a given recipe', async () => {
  setupFetchStub();

  const payload = {
    servers: [1, 2],
  };

  const forge = new Forge('API_TOKEN');
  await forge.recipes.run(1, payload);

  expectToHaveBeenCalledWith('/recipes/1/run', 'POST', payload);

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
