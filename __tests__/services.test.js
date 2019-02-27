import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it reboots mysql on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql/reboot', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const rebootMysql = await forge.services.rebootMysql(1);

  expect(rebootMysql.status).toEqual(200);
});

test('it stops mysql on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/mysql/stop', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const stopMysql = await forge.services.stopMysql(1);

  expect(stopMysql.status).toEqual(200);
});

test('it reboots nginx on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/nginx/reboot', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const rebootNginx = await forge.services.rebootNginx(1);

  expect(rebootNginx.status).toEqual(200);
});

test('it stops nginx on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/nginx/stop', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const stopNginx = await forge.services.stopNginx(1);

  expect(stopNginx.status).toEqual(200);
});

test('it reboots postgres on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/postgres/reboot', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const rebootPostgres = await forge.services.rebootPostgres(1);

  expect(rebootPostgres.status).toEqual(200);
});

test('it stops postgres on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/postgres/stop', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const stopPostgres = await forge.services.stopPostgres(1);

  expect(stopPostgres.status).toEqual(200);
});

test('it reboots PHP on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/php/reboot', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const rebootPhp = await forge.services.rebootPhp(1);

  expect(rebootPhp.status).toEqual(200);
});

test('it installs Blackfire on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/blackfire/install', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const blackfire = await forge.services.installBlackfire(1, {
    server_id: 'SAMPLE ID',
    server_token: 'SAMPLE TOKEN',
  });

  expect(blackfire.status).toEqual(200);
});

test('it removes blackfire from a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/blackfire/remove', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const blackfire = await forge.services.removeBlackfire(1);

  expect(blackfire.status).toEqual(200);
});

test('it installs Papertrail on a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/papertrail/install', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const papertrail = await forge.services.installPapertrail(1, {
    hose: '192.241.143.108',
  });

  expect(papertrail.status).toEqual(200);
});

test('it removes Papertrail from a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/papertrail/remove', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const papertrail = await forge.services.removePapertrail(1);

  expect(papertrail.status).toEqual(200);
});
