import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it enables quick deployment', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const deployment = await forge.deployment.enable(1, 1);

  expect(deployment.status).toEqual(200);
});

test('it disables quick deployment', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const deployment = await forge.deployment.disable(1, 1);

  expect(deployment.status).toEqual(200);
});

test('it gets the deployment script', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment/script', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const script = await forge.deployment.getScript(1, 1);

  expect(script.status).toEqual(200);
});

test('it updates the deployment scipt', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment/script', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const script = await forge.deployment.updateScript(1, 1, {
    content: 'CONTENT_OF_THE_SCRIPT',
  });

  expect(script.status).toEqual(200);
});

test('it deploys the site', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment/deploy', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const deployment = await forge.deployment.deploy(1, 1);

  expect(deployment.status).toEqual(200);
});

test('it resets the deployment status', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment/reset', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const status = await forge.deployment.reset(1, 1);

  expect(status.status).toEqual(200);
});

test('it gets the deployment log', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/deployment/log', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const log = await forge.deployment.log(1, 1);

  expect(log.status).toEqual(200);
});
