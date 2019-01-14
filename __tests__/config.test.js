import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it gets a given sites Nginx config', async () => {
  moxios.stubRequest('/servers/1/sites/1/nginx', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const config = await forge.config.getNginx(1, 1);

  expect(config.status).toEqual(200);
});

test('it updates a given Nginx config', async () => {
  moxios.stubRequest('/servers/1/sites/1/nginx', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const config = await forge.config.updateNginx(1, 1, {
    content: 'CONTENT',
  });

  expect(config.status).toEqual(200);
});

test('it gets a given sites .env file', async () => {
  moxios.stubRequest('/servers/1/sites/1/env', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const env = await forge.config.getEnv(1, 1);

  expect(env.status).toEqual(200);
});

test('it updates a given .env file', async () => {
  moxios.stubRequest('/servers/1/sites/1/env', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const env = await forge.config.updateEnv(1, 1, {
    content: 'CONTENT',
  });

  expect(env.status).toEqual(200);
});
