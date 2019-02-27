import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new worker', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/workers', {
    response: {
      worker: {
        id: 1,
        connection: 'rule',
        command: 'php /home/forge/default/artisan queue:work rule --sleep=60 --daemon --quiet --timeout=90',
        queue: null,
        timeout: 90,
        sleep: 60,
        tries: null,
        processes: 1,
        environment: null,
        daemon: 1,
        status: 'installing',
        created_at: '2016-12-17 07:15:03',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const worker = await forge.workers.create(1, 1, {
    connection: 'sqs',
    timeout: 90,
    sleep: 60,
    tries: null,
    processes: 1,
    daemon: true,
  });

  expect(worker.data).toEqual({
    worker: {
      id: 1,
      connection: 'rule',
      command: 'php /home/forge/default/artisan queue:work rule --sleep=60 --daemon --quiet --timeout=90',
      queue: null,
      timeout: 90,
      sleep: 60,
      tries: null,
      processes: 1,
      environment: null,
      daemon: 1,
      status: 'installing',
      created_at: '2016-12-17 07:15:03',
    },
  });
});

test('it lists all workers for a given site', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/workers', {
    response: {
      workers: [
        {
          id: 1,
          connection: 'rule',
          command: 'php /home/forge/default/artisan queue:work rule --sleep=60 --daemon --quiet --timeout=90',
          queue: null,
          timeout: 90,
          sleep: 60,
          tries: null,
          processes: 1,
          environment: null,
          daemon: 1,
          status: 'installing',
          created_at: '2016-12-17 07:15:03',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const workers = await forge.workers.list(1, 1);

  expect(workers.data).toEqual({
    workers: [
      {
        id: 1,
        connection: 'rule',
        command: 'php /home/forge/default/artisan queue:work rule --sleep=60 --daemon --quiet --timeout=90',
        queue: null,
        timeout: 90,
        sleep: 60,
        tries: null,
        processes: 1,
        environment: null,
        daemon: 1,
        status: 'installing',
        created_at: '2016-12-17 07:15:03',
      },
    ],
  });
});

test('it gets a given worker', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/workers/1', {
    response: {
      worker: {
        id: 1,
        connection: 'rule',
        command: 'php /home/forge/default/artisan queue:work rule --sleep=60 --daemon --quiet --timeout=90',
        queue: null,
        timeout: 90,
        sleep: 60,
        tries: null,
        processes: 1,
        environment: null,
        daemon: 1,
        status: 'installing',
        created_at: '2016-12-17 07:15:03',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const worker = await forge.workers.get(1, 1, 1);

  expect(worker.data).toEqual({
    worker: {
      id: 1,
      connection: 'rule',
      command: 'php /home/forge/default/artisan queue:work rule --sleep=60 --daemon --quiet --timeout=90',
      queue: null,
      timeout: 90,
      sleep: 60,
      tries: null,
      processes: 1,
      environment: null,
      daemon: 1,
      status: 'installing',
      created_at: '2016-12-17 07:15:03',
    },
  });
});

test('it deletes a given worker', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/workers/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const worker = await forge.workers.delete(1, 1, 1);

  expect(worker.status).toEqual(200);
});

test('it restarts a given worker', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/workers/1/restart', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const worker = await forge.workers.restart(1, 1, 1);

  expect(worker.status).toEqual(200);
});
