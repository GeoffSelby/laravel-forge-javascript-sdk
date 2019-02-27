import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it installs a new repository', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/git', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const repo = await forge.git.install(1, 1, {
    provider: 'github',
    repository: 'username/respository',
    branch: 'master',
  });

  expect(repo.status).toEqual(200);
});

test('it updates a repository', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/git', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const repo = await forge.git.update(1, 1, {
    provider: 'github',
    repository: 'username/respository',
    branch: 'master',
  });

  expect(repo.status).toEqual(200);
});

test('it removes a repository', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/sites/1/git', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const repo = await forge.git.remove(1, 1);

  expect(repo.status).toEqual(200);
});
