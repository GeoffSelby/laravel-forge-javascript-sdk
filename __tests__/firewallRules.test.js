import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new firewall rule for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/firewall-rules', {
    response: {
      id: 1,
      name: 'rule',
      port: 88,
      ip_address: null,
      status: 'installing',
      created_at: '2016-12-16 15:50:17',
    },
  });

  const forge = new Forge('API_TOKEN');
  const rule = await forge.firewallRules.create(1, {
    name: 'rule name',
    ip_address: '192.168.1.1',
    port: 88,
  });

  expect(rule.data).toEqual({
    id: 1,
    name: 'rule',
    port: 88,
    ip_address: null,
    status: 'installing',
    created_at: '2016-12-16 15:50:17',
  });
});

test('it lists all firewall rules for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/firewall-rules', {
    response: {
      rules: [
        {
          id: 1,
          name: 'rule',
          port: 88,
          ip_address: null,
          status: 'installing',
          created_at: '2016-12-16 15:50:17',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const rules = await forge.firewallRules.list(1);

  expect(rules.data).toEqual({
    rules: [
      {
        id: 1,
        name: 'rule',
        port: 88,
        ip_address: null,
        status: 'installing',
        created_at: '2016-12-16 15:50:17',
      },
    ],
  });
});

test('it gets a given firewall rule for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/firewall-rules/1', {
    response: {
      rule: {
        id: 1,
        name: 'rule',
        port: 88,
        ip_address: null,
        status: 'installing',
        created_at: '2016-12-16 15:50:17',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const rule = await forge.firewallRules.get(1, 1);

  expect(rule.data).toEqual({
    rule: {
      id: 1,
      name: 'rule',
      port: 88,
      ip_address: null,
      status: 'installing',
      created_at: '2016-12-16 15:50:17',
    },
  });
});

test('it deletes a given rule for a given server', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/servers/1/firewall-rules/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const rule = await forge.firewallRules.delete(1, 1);

  expect(rule.status).toEqual(200);
});
