import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new daemon on a given server', async () => {
  moxios.stubRequest('/servers/1/daemons', {
    response: {
      daemon: {
        id: 1,
        command: 'COMMAND',
        user: 'root',
        status: 'installing',
        created_at: '2016-12-16 15:46:22',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const daemon = await forge.daemons.create(1, {
    command: 'COMMAND',
    user: 'root',
  });

  expect(daemon.data).toEqual({
    daemon: {
      id: 1,
      command: 'COMMAND',
      user: 'root',
      status: 'installing',
      created_at: '2016-12-16 15:46:22',
    },
  });
});

test('it lists all daemons on a given server', async () => {
  moxios.stubRequest('/servers/1/daemons', {
    response: {
      daemons: [
        {
          id: 1,
          command: 'COMMAND',
          user: 'root',
          status: 'installing',
          created_at: '2016-12-16 15:46:22',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const daemon = await forge.daemons.list(1);

  expect(daemon.data).toEqual({
    daemons: [
      {
        id: 1,
        command: 'COMMAND',
        user: 'root',
        status: 'installing',
        created_at: '2016-12-16 15:46:22',
      },
    ],
  });
});

test('it gets a given daemon from a given server', async () => {
  moxios.stubRequest('/servers/1/daemons/1', {
    response: {
      daemon: {
        id: 1,
        command: 'COMMAND',
        user: 'root',
        status: 'installing',
        create_at: '2016-12-16 15:46:22',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const daemon = await forge.daemons.get(1, 1);

  expect(daemon.data).toEqual({
    daemon: {
      id: 1,
      command: 'COMMAND',
      user: 'root',
      status: 'installing',
      create_at: '2016-12-16 15:46:22',
    },
  });
});

test('it deletes a given daemon from a given server', async () => {
  moxios.stubRequest('/servers/1/daemons/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const daemon = await forge.daemons.delete(1, 1);

  expect(daemon.status).toEqual(200);
});

test('it restarts a given daemon on a given server', async () => {
  moxios.stubRequest('/servers/1/daemons/1/restart', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const daemon = await forge.daemons.restart(1, 1);

  expect(daemon.status).toEqual(200);
});
