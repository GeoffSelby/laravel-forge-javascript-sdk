import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a webhook', async () => {
  moxios.stubRequest('/servers/1/sites/1/webhooks', {
    response: {
      url: 'https://domain.com',
    },
  });

  const forge = new Forge('API_TOKEN');
  const webhook = await forge.webhooks.create(1, 1);

  expect(webhook.data).toEqual({
    url: 'https://domain.com',
  });
});

test('it lists all webhooks', async () => {
  moxios.stubRequest('/servers/1/sites/1/webhooks', {
    response: {
      webhooks: [
        {
          id: 10,
          url: 'https://domain.com',
          created_at: '2018-10-10 17:01:18',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const webhook = await forge.webhooks.list(1, 1);

  expect(webhook.data).toEqual({
    webhooks: [
      {
        id: 10,
        url: 'https://domain.com',
        created_at: '2018-10-10 17:01:18',
      },
    ],
  });
});

test('it gets a given webhook', async () => {
  moxios.stubRequest('/servers/1/sites/1/webhooks/10', {
    response: {
      webhook: {
        id: 10,
        url: 'https://domain.com',
        created_at: '2018-10-10 17:01:18',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const webhook = await forge.webhooks.get(1, 1, 10);

  expect(webhook.data).toEqual({
    webhook: {
      id: 10,
      url: 'https://domain.com',
      created_at: '2018-10-10 17:01:18',
    },
  });
});

test('it deletes a webhook', async () => {
  moxios.stubRequest('/servers/1/sites/1/webhooks/10', {
    response: {
      url: 'https://domain.com',
    },
  });

  const forge = new Forge('API_TOKEN');
  const webhook = await forge.webhooks.delete(1, 1, 10);

  expect(webhook.data).toEqual({
    url: 'https://domain.com',
  });
});
