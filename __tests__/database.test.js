import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});


afterEach(() => {
  moxios.uninstall();
});

test('it creates a new mysql database on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql', {
    response: {
      database: {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:12:22',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const database = await forge.database.create(1, {
    name: 'forge',
  });

  expect(database.data).toEqual({
    database: {
      id: 1,
      name: 'forge',
      status: 'installing',
      created_at: '2016-12-16 16:12:22',
    },
  });
});

test('it lists all mysql databases on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql', {
    response: {
      databases: [
        {
          id: 1,
          name: 'forge',
          status: 'installing',
          created_at: '2016-12-16 16:12:22',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const databases = await forge.database.list(1);

  expect(databases.data).toEqual({
    databases: [
      {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:12:22',
      },
    ],
  });
});

test('it gets a given database on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql/1', {
    response: {
      database: {
        id: 1,
        name: 'forge',
        status: 'installing',
        created_at: '2016-12-16 16:12:22',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const database = await forge.database.get(1, 1);

  expect(database.data).toEqual({
    database: {
      id: 1,
      name: 'forge',
      status: 'installing',
      created_at: '2016-12-16 16:12:22',
    },
  });
});

test('it deletes a given database on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const database = await forge.database.delete(1, 1);

  expect(database.status).toEqual(200);
});
