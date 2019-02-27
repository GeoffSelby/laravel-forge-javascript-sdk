import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it installs Wordpress', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/wordpress', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const wordpress = await forge.wordpress.install(1, 1, {
    database: 'forge',
    user: 1,
  });

  expect(wordpress.status).toEqual(200);
});

test('it uninstalls Wordpress', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/wordpress', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const wordpress = await forge.wordpress.uninstall(1, 1);

  expect(wordpress.status).toEqual(200);
})
