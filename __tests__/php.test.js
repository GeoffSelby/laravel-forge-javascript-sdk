import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it upgrades Php version on a given server', async () => {
  moxios.stubRequest('/servers/1/php/upgrade', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const upgradePhp = await forge.php.upgrade(1);

  expect(upgradePhp.status).toEqual(200);
});

test('it enables OPCache on a given server', async () => {
  moxios.stubRequest('/servers/1/php/opcache', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const opcache = await forge.php.enableOPCache(1);

  expect(opcache.status).toEqual(200);
});

test('it disables OPCache on a given server', async () => {
  moxios.stubRequest('/servers/1/php/opcache', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const opcache = await forge.php.disableOPCache(1);

  expect(opcache.status).toEqual(200);
});
