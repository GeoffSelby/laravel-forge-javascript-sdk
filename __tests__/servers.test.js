import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new server', async () => {
  moxios.stubRequest('/servers', {
    response: {
      server: {
        id: 16,
        credential_id: 1,
        name: 'test-via-api',
        size: '512MB',
        region: 'Amsterdam 2',
        php_version: 'php71',
        ip_address: null,
        private_ip_address: null,
        blackfire_status: null,
        papertrail_status: null,
        revoked: false,
        created_at: '2016-12-15 15:04:05',
        is_ready: false,
        network: [],
      },
      sudo_password: 'baracoda',
      database_password: 'spotted_eagle_ray',
    },
  });

  const forge = new Forge('SAMPLE_TOKEN');
  const server = await forge.servers.create({
    provider: 'ocean2',
    credential_id: 1,
    name: 'test-via-api',
    size: '512MB',
    database: 'test123',
    php_version: 'php71',
    region: 'ams2',
    recipe_id: null,
  });

  expect(server.data).toEqual({
    server: {
      id: 16,
      credential_id: 1,
      name: 'test-via-api',
      size: '512MB',
      region: 'Amsterdam 2',
      php_version: 'php71',
      ip_address: null,
      private_ip_address: null,
      blackfire_status: null,
      papertrail_status: null,
      revoked: false,
      created_at: '2016-12-15 15:04:05',
      is_ready: false,
      network: [],
    },
    sudo_password: 'baracoda',
    database_password: 'spotted_eagle_ray',
  });
});

test('api returns list of servers', async () => {
  moxios.stubRequest('/servers', {
    status: 200,
    response: {
      servers: [
        {
          id: 1,
          credential_id: 1,
          name: 'test-via-api',
          size: '512MB',
          region: 'Amsterdam 2',
          php_version: 'php71',
          ip_address: '37.139.3.148',
          private_ip_address: '10.129.3.252',
          blackfire_status: null,
          papertrail_status: null,
          revoked: false,
          created_at: '2016-12-15 18:38:18',
          is_ready: true,
          network: []
        },
      ],
    },
  });

  const forge = new Forge('SAMPLE_TOKEN');

  const servers = await forge.servers.list();

  expect(servers.data).toEqual({
    servers: [
      {
        id: 1,
        credential_id: 1,
        name: 'test-via-api',
        size: '512MB',
        region: 'Amsterdam 2',
        php_version: 'php71',
        ip_address: '37.139.3.148',
        private_ip_address: '10.129.3.252',
        blackfire_status: null,
        papertrail_status: null,
        revoked: false,
        created_at: '2016-12-15 18:38:18',
        is_ready: true,
        network: []
      },
    ],
  });
});

test('it gets a server by server_id', async () => {
  moxios.stubRequest('/servers/1', {
    status: 200,
    response: {
      server: {
        id: 1,
        credential_id: 1,
        name: 'test-via-api',
        size: '512MB',
        region: 'Amsterdam 2',
        php_version: 'php71',
        ip_address: '37.139.3.148',
        private_ip_address: '10.129.3.252',
        blackfire_status: null,
        papertrail_status: null,
        revoked: false,
        created_at: '2016-12-15 15:04:05',
        is_ready: true,
        network: [],
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.get(1);

  expect(server.data).toEqual({
    server: {
      id: 1,
      credential_id: 1,
      name: 'test-via-api',
      size: '512MB',
      region: 'Amsterdam 2',
      php_version: 'php71',
      ip_address: '37.139.3.148',
      private_ip_address: '10.129.3.252',
      blackfire_status: null,
      papertrail_status: null,
      revoked: false,
      created_at: '2016-12-15 15:04:05',
      is_ready: true,
      network: [],
    },
  });
});

test('it updates a server by server_id with payload', async () => {
  moxios.stubRequest('/servers/1', {
    response: {
      server: {
        id: 1,
        credential_id: 1,
        name: 'test-via-api',
        size: '512MB',
        region: 'Amsterdam 2',
        php_version: 'php71',
        ip_address: null,
        private_ip_address: null,
        blackfire_status: null,
        papertrail_status: null,
        revoked: false,
        created_at: '2016-12-15 15:04:05',
        is_ready: false,
        network: [
          2,
          3,
        ],
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.update(1, {
    name: 'renamed-server',
    size: '512MB',
    ip_address: '192.241.143.108',
    private_ip_address: '10.136.8.40',
    max_upload_size: 123,
    network: [
      2,
      3,
    ],
  });

  expect(server.data).toEqual({
    server: {
      id: 1,
      credential_id: 1,
      name: 'test-via-api',
      size: '512MB',
      region: 'Amsterdam 2',
      php_version: 'php71',
      ip_address: null,
      private_ip_address: null,
      blackfire_status: null,
      papertrail_status: null,
      revoked: false,
      created_at: '2016-12-15 15:04:05',
      is_ready: false,
      network: [
        2,
        3,
      ],
    },
  });
});

test('it updates database password for legacy servers', async () => {
  moxios.stubRequest('/servers/1/database-password', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const newPassword = await forge.servers.updateDbPassword(1, {
    password: 'newpassword',
  });

  expect(newPassword.status).toEqual(200);
});

test('it deletes a given server', async () => {
  moxios.stubRequest('/servers/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.delete(1);

  expect(server.status).toEqual(200);
});

test('it reboots a given server', async () => {
  moxios.stubRequest('/servers/1/reboot', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.reboot(1);

  expect(server.status).toEqual(200);
});

test('it revokes Forge access to a given server', async () => {
  moxios.stubRequest('/servers/1/revoke', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.revoke(1);

  expect(server.status).toEqual(200);
});

test('it reconnects a revoked server', async () => {
  moxios.stubRequest('/servers/1/reconnect', {
    response: {
      public_key: 'Public key here',
    },
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.reconnect(1);

  expect(server.data).toEqual({
    public_key: 'Public key here',
  });
});

test('it reactivates a given server', async () => {
  moxios.stubRequest('/servers/1/reactivate', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const server = await forge.servers.reactivate(1);

  expect(server.status).toEqual(200);
});

test('it gets recent events for all servers', async () => {
  moxios.stubRequest('/servers/events', {
    response: {
      server_id: 18,
      ran_as: 'forge',
      server_name: 'billowing-cliff',
      description: 'Deploying PHP Info Page.',
      created_at: '2017-04-28 18:08:44',
    },
  });

  const forge = new Forge('API_TOKEN');
  const events = await forge.servers.events();

  expect(events.data).toEqual({
    server_id: 18,
    ran_as: 'forge',
    server_name: 'billowing-cliff',
    description: 'Deploying PHP Info Page.',
    created_at: '2017-04-28 18:08:44',
  });
});

test('it gets recent events for a given server', async () => {
  moxios.stubRequest('/servers/events?server_id=1', {
    response: {
      server_id: 1,
      ran_as: 'forge',
      server_name: 'billowing-cliff',
      description: 'Deploying PHP Info Page.',
      created_at: '2017-04-28 18:08:44',
    },
  });

  const forge = new Forge('API_TOKEN');
  const events = await forge.servers.events(1);

  expect(events.data).toEqual({
    server_id: 1,
    ran_as: 'forge',
    server_name: 'billowing-cliff',
    description: 'Deploying PHP Info Page.',
    created_at: '2017-04-28 18:08:44',
  });
});
