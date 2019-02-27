import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new job on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/jobs', {
    response: {
      job: {
        id: 2,
        command: 'COMMAND_THE_JOB_RUNS',
        user: 'root',
        frequency: 'Nightly',
        cron: '0 0 * * *',
        status: 'installing',
        created_at: '2016-12-16 15:56:59',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const job = await forge.jobs.create(1, {
    command: 'COMMAND',
    frequency: 'nightly',
  });

  expect(job.data).toEqual({
    job: {
      id: 2,
      command: 'COMMAND_THE_JOB_RUNS',
      user: 'root',
      frequency: 'Nightly',
      cron: '0 0 * * *',
      status: 'installing',
      created_at: '2016-12-16 15:56:59',
    },
  });
});

test('it lists all jobs for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/jobs', {
    response: {
      jobs: [
        {
          id: 2,
          command: 'COMMAND_THE_JOB_RUNS',
          user: 'root',
          frequency: 'Nightly',
          cron: '0 0 * * *',
          status: 'installing',
          created_at: '2016-12-16 15:56:59',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const jobs = await forge.jobs.list(1);

  expect(jobs.data).toEqual({
    jobs: [
      {
        id: 2,
        command: 'COMMAND_THE_JOB_RUNS',
        user: 'root',
        frequency: 'Nightly',
        cron: '0 0 * * *',
        status: 'installing',
        created_at: '2016-12-16 15:56:59',
      },
    ],
  });
});

test('it gets a given job for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/jobs/1', {
    response: {
      job: {
        id: 1,
        command: 'COMMAND_THE_JOB_RUNS',
        user: 'root',
        frequency: 'Nightly',
        cron: '0 0 * * *',
        status: 'installing',
        created_at: '2016-12-16 15:56:59',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const job = await forge.jobs.get(1, 1);

  expect(job.data).toEqual({
    job: {
      id: 1,
      command: 'COMMAND_THE_JOB_RUNS',
      user: 'root',
      frequency: 'Nightly',
      cron: '0 0 * * *',
      status: 'installing',
      created_at: '2016-12-16 15:56:59',
    },
  });
});

test('it deletes a given job for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/jobs/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const job = await forge.jobs.delete(1, 1);

  expect(job.status).toEqual(200);
});
