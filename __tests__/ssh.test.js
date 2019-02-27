import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new ssh key', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/keys', {
    response: {
      key: {
        id: 1,
        name: 'test-key',
        status: 'installing',
        created_at: '2016-12-16 16:31:16',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const key = await forge.ssh.create(1, {
    name: 'test-key',
    key: 'KEY_CONTENT_HERE',
  });

  expect(key.data).toEqual({
    key: {
      id: 1,
      name: 'test-key',
      status: 'installing',
      created_at: '2016-12-16 16:31:16',
    },
  });
});

test('it lists all keys on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/keys', {
    response: {
      keys: [
        {
          id: 1,
          name: 'test-key',
          status: 'installing',
          created_at: '2016-12-16 16:31:16',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const keys = await forge.ssh.list(1);

  expect(keys.data).toEqual({
    keys: [
      {
        id: 1,
        name: 'test-key',
        status: 'installing',
        created_at: '2016-12-16 16:31:16',
      },
    ],
  });
});

test('it gets a given key', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/keys/1', {
    response: {
      key: {
        id: 1,
        name: 'test-key',
        status: 'installing',
        created_at: '2016-12-16 16:31:16',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const key = await forge.ssh.get(1, 1);

  expect(key.data).toEqual({
    key: {
      id: 1,
      name: 'test-key',
      status: 'installing',
      created_at: '2016-12-16 16:31:16',
    },
  });
});

test('it deletes a given key', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/keys/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const key = await forge.ssh.delete(1, 1);

  expect(key.status).toEqual(200);
});
