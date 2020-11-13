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

test('it creates a new ssl certificate for a given site', async () => {
  setupFetchStub();

  const payload = {
    type: 'new',
    domain: 'domain.com',
    country: 'US',
    state: 'NY',
    city: 'New York',
    organization: 'Company Name',
    department: 'IT',
  };

  const forge = new Forge('API_TOKEN');
  await forge.ssl.create(1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/certificates',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it installs an existing certificate', async () => {
  setupFetchStub();

  const payload = {
    type: 'existing',
    key: 'PRIVATE_KEY_HERE',
    certificate: 'CERTIFICATE HERE',
  };

  const forge = new Forge('API_TOKEN');
  await forge.ssl.installExisting(1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/certificates',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it clones an existing certificate', async () => {
  setupFetchStub();

  const payload = {
    type: 'clone',
    certificate_id: 1,
  };

  const forge = new Forge('API_TOKEN');
  await forge.ssl.clone(1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/certificates',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it obtains a LetsEncrypt certificate', async () => {
  setupFetchStub();

  const payload = {
    domains: ['www.domain.com'],
  };

  const forge = new Forge('API_TOKEN');
  await forge.ssl.letsencrypt(1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/certificates/letsencrypt',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it lists all certificates', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssl.list(1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/certificates', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets a given certificate', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssl.get(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/certificates/1', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it gets the full signing request content', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssl.csr(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/certificates/1/csr', 'GET');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it installs a certificate', async () => {
  setupFetchStub();

  const payload = {
    certificate: 'CERTIFICATE CONTENT',
    add_intermediates: false,
  };

  const forge = new Forge('API_TOKEN');
  await forge.ssl.install(1, 1, 1, payload);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/certificates/1/install',
    'POST',
    payload,
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it activates a certificate', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssl.activate(1, 1, 1);

  expectToHaveBeenCalledWith(
    '/servers/1/sites/1/certificates/1/activate',
    'POST',
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test('it deletes a certificate', async () => {
  setupFetchStub();

  const forge = new Forge('API_TOKEN');
  await forge.ssl.delete(1, 1, 1);

  expectToHaveBeenCalledWith('/servers/1/sites/1/certificates/1', 'DELETE');

  expect(window.fetch).toHaveBeenCalledTimes(1);
});
