import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new site on a given server', async () => {
  moxios.stubRequest('/servers/1/sites', {
    response: {
      site: {
        id: 2,
        name: 'site.com',
        directory: '/test',
        wildcards: false,
        status: 'installing',
        repository: null,
        repository_provider: null,
        repository_branch: null,
        repository_status: null,
        quick_deploy: false,
        project_type: 'php',
        app: null,
        app_status: null,
        hipchat_room: null,
        slack_channel: null,
        created_at: '2016-12-16 16:38:08',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const site = await forge.sites.create(1, {
    domain: 'site.com',
    project_type: 'php',
    directory: '/test',
  });

  expect(site.data).toEqual({
    site: {
      id: 2,
      name: 'site.com',
      directory: '/test',
      wildcards: false,
      status: 'installing',
      repository: null,
      repository_provider: null,
      repository_branch: null,
      repository_status: null,
      quick_deploy: false,
      project_type: 'php',
      app: null,
      app_status: null,
      hipchat_room: null,
      slack_channel: null,
      created_at: '2016-12-16 16:38:08',
    },
  });
});

test('it lists all sites on a given server', async () => {
  moxios.stubRequest('/servers/1/sites', {
    response: {
      sites: [
        {
          id: 2,
          name: 'site.com',
          directory: '/test',
          wildcards: false,
          status: 'installing',
          repository: null,
          repository_provider: null,
          repository_branch: null,
          repository_status: null,
          quick_deploy: false,
          project_type: 'php',
          app: null,
          app_status: null,
          hipchat_room: null,
          slack_channel: null,
          created_at: '2016-12-16 16:38:08',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const site = await forge.sites.list(1);

  expect(site.data).toEqual({
    sites: [
      {
        id: 2,
        name: 'site.com',
        directory: '/test',
        wildcards: false,
        status: 'installing',
        repository: null,
        repository_provider: null,
        repository_branch: null,
        repository_status: null,
        quick_deploy: false,
        project_type: 'php',
        app: null,
        app_status: null,
        hipchat_room: null,
        slack_channel: null,
        created_at: '2016-12-16 16:38:08',
      },
    ],
  });
});

test('it gets a given site on a given server', async () => {
  moxios.stubRequest('/servers/1/sites/1', {
    response: {
      site: {
        id: 1,
        name: 'site.com',
        directory: '/test',
        wildcards: false,
        status: 'installing',
        repository: null,
        repository_provider: null,
        repository_branch: null,
        repository_status: null,
        quick_deploy: false,
        project_type: 'php',
        app: null,
        app_status: null,
        hipchat_room: null,
        slack_channel: null,
        created_at: '2016-12-16 16:38:08',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const site = await forge.sites.get(1, 1);

  expect(site.data).toEqual({
    site: {
      id: 1,
      name: 'site.com',
      directory: '/test',
      wildcards: false,
      status: 'installing',
      repository: null,
      repository_provider: null,
      repository_branch: null,
      repository_status: null,
      quick_deploy: false,
      project_type: 'php',
      app: null,
      app_status: null,
      hipchat_room: null,
      slack_channel: null,
      created_at: '2016-12-16 16:38:08',
    },
  });
});

test('it updates a given sites path on a given server', async () => {
  moxios.stubRequest('/servers/1/sites/1', {
    response: {
      site: {
        id: 1,
        name: 'site.com',
        directory: '/some/path',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const site = await forge.sites.update(1, 1, {
    directory: '/some/path',
    name: 'updated-site.com',
  });

  expect(site.data).toEqual({
    site: {
      id: 1,
      name: 'site.com',
      directory: '/some/path',
    },
  });
});

test('it deletes a site from a given server', async () => {
  moxios.stubRequest('/servers/1/sites/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const site = await forge.sites.delete(1, 1);

  expect(site.status).toEqual(200);
});

test('it updates a given load balancers server list', async () => {
  moxios.stubRequest('/servers/1/sites/1/balancing', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const balancer = await forge.sites.balance(1, 1, {
    servers: [
      2,
      3,
    ],
  });

  expect(balancer.status).toEqual(200);
});
