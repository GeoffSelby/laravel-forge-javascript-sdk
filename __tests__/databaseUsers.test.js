import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new database user on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql-users', {
    response: {
      user: {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:19:01',
        databases: [
          1,
        ],
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const user = await forge.databaseUsers.create(1, {
    name: 'forge',
    password: 'dolores',
    databases: [
      1,
    ],
  });

  expect(user.data).toEqual({
    user: {
      id: 1,
      name: 'forge',
      status: 'installing',
      created_at: '2016-12-16 16:19:01',
      databases: [
        1,
      ],
    },
  });
});

test('it lists all database users on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql-users', {
    response: {
      users: [
        {
          id: 1,
          name: 'forge',
          status: 'installing',
          created_at: '2016-12-16 16:19:01',
          databases: [
            1,
          ],
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const users = await forge.databaseUsers.list(1);

  expect(users.data).toEqual({
    users: [
      {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:19:01',
        databases: [
          1,
        ],
      },
    ],
  });
});

test('it gets a given database user on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql-users/1', {
    response: {
      user: {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:19:01',
        databases: [
          1,
        ],
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const user = await forge.databaseUsers.get(1, 1);

  expect(user.data).toEqual({
    user: {
      id: 1,
      name: 'forge',
      status: 'installing',
      created_at: '2016-12-16 16:19:01',
      databases: [
        1,
      ],
    },
  });
});

test('it updates a given users database access list', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql-users/1', {
    response: {
      user: {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:19:01',
        databases: [
          1,
        ],
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const user = await forge.databaseUsers.update(1, 1, {
    databases: [
      2,
    ],
  });

  expect(user.data).toEqual({
    user: {
      id: 1,
      name: 'forge',
      status: 'installing',
      created_at: '2016-12-16 16:19:01',
      databases: [
        1,
      ],
    },
  });
});

test('it deletes a database user from a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql-users/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const user = await forge.databaseUsers.delete(1, 1);

  expect(user.status).toEqual(200);
});
