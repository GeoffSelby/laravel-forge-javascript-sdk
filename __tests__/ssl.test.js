import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new ssl certificate for a given site', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates', {
    response: {
      certificate: {
        domain: 'domain.com',
        request_status: 'creating',
        created_at: '2016-12-17 07:02:35',
        id: 3,
        existing: false,
        active: false,
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.create(1, 1, {
    type: 'new',
    domain: 'domain.com',
    country: 'US',
    state: 'NY',
    city: 'New York',
    organization: 'Company Name',
    department: 'IT',
  });

  expect(cert.data).toEqual({
    certificate: {
      domain: 'domain.com',
      request_status: 'creating',
      created_at: '2016-12-17 07:02:35',
      id: 3,
      existing: false,
      active: false,
    },
  });
});

test('it installs an existing certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates', {
    response: {
      domain: 'domain.com',
      request_status: 'creating',
      created_at: '2016-12-17 07:02:35',
      id: 3,
      existing: false,
      active: false,
    },
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.installExisting(1, 1, {
    type: 'existing',
    key: 'PRIVATE_KEY_HERE',
    certificate: 'CERTIFICATE HERE',
  });

  expect(cert.data).toEqual({
    domain: 'domain.com',
    request_status: 'creating',
    created_at: '2016-12-17 07:02:35',
    id: 3,
    existing: false,
    active: false,
  });
});

test('it clones an existing certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates', {
    response: {
      domain: 'domain.com',
      request_status: 'creating',
      created_at: '2016-12-17 07:02:35',
      id: 3,
      existing: false,
      active: false,
    },
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.clone(1, 1, {
    type: 'clone',
    certificate_id: 1,
  });

  expect(cert.data).toEqual({
    domain: 'domain.com',
    request_status: 'creating',
    created_at: '2016-12-17 07:02:35',
    id: 3,
    existing: false,
    active: false,
  });
});

test('it obtains a LetsEncrypt certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates/letsencrypt', {
    response: {
      certificate: {
        domain: 'www.domain.com',
        type: 'letsencrypt',
        request_status: 'created',
        status: 'installing',
        created_at: '2016-12-17 07:02:35',
        id: 1,
        existing: true,
        active: false,
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.letsencrypt(1, 1, {
    domains: [
      'www.domain.com',
    ],
  });

  expect(cert.data).toEqual({
    certificate: {
      domain: 'www.domain.com',
      type: 'letsencrypt',
      request_status: 'created',
      status: 'installing',
      created_at: '2016-12-17 07:02:35',
      id: 1,
      existing: true,
      active: false,
    },
  });
});

test('it lists all certificates', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates', {
    response: {
      certificates: [
        {
          domain: 'domain.com',
          request_status: 'creating',
          create_at: '2016-12-17 07:02:35',
          id: 3,
          existing: false,
          active: false,
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const certs = await forge.ssl.list(1, 1);

  expect(certs.data).toEqual({
    certificates: [
      {
        domain: 'domain.com',
        request_status: 'creating',
        create_at: '2016-12-17 07:02:35',
        id: 3,
        existing: false,
        active: false,
      },
    ],
  });
});

test('it gets a given certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates/1', {
    response: {
      certificate: {
        domain: 'domain.com',
        request_status: 'creating',
        created_at: '2016-12-17 07:02:35',
        id: 3,
        existing: false,
        active: false,
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.get(1, 1, 1);

  expect(cert.data).toEqual({
    certificate: {
      domain: 'domain.com',
      request_status: 'creating',
      created_at: '2016-12-17 07:02:35',
      id: 3,
      existing: false,
      active: false,
    },
  });
});

test('it gets the full signing request content', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates/1/csr', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const csr = await forge.ssl.csr(1, 1, 1);

  expect(csr.status).toEqual(200);
});

test('it installs a certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates/1/install', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.install(1, 1, 1, {
    certificate: 'CERTIFICATE CONTENT',
    add_intermediates: false,
  });

  expect(cert.status).toEqual(200);
});

test('it activates a certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates/1/activate', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.activate(1, 1, 1);

  expect(cert.status).toEqual(200);
});

test('it deletes a certificate', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/certificates/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const cert = await forge.ssl.delete(1, 1, 1);

  expect(cert.status).toEqual(200);
});
