import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it gets user information', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/user', {
    response: {
      user: {
        id: 1,
        name: 'Mohamed Said',
        email: 'mail@gmail.com',
        card_last_four: '1881',
        connected_to_github: true,
        connected_to_gitlab: true,
        connected_to_bitbucket: false,
        connected_to_bitbucket_two: true,
        connected_to_digitalocean: true,
        connected_to_linode: true,
        connected_to_vultr: true,
        connected_to_aws: true,
        ready_for_billing: true,
        stripe_is_active: 1,
        stripe_plan: 'yearly-basic-199-trial',
        subscribed: 1,
        can_create_servers: true,
        '2fa_enabled': false,
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const user = await forge.user.get();

  expect(user.data).toEqual({
    user: {
      id: 1,
      name: 'Mohamed Said',
      email: 'mail@gmail.com',
      card_last_four: '1881',
      connected_to_github: true,
      connected_to_gitlab: true,
      connected_to_bitbucket: false,
      connected_to_bitbucket_two: true,
      connected_to_digitalocean: true,
      connected_to_linode: true,
      connected_to_vultr: true,
      connected_to_aws: true,
      ready_for_billing: true,
      stripe_is_active: 1,
      stripe_plan: 'yearly-basic-199-trial',
      subscribed: 1,
      can_create_servers: true,
      '2fa_enabled': false,
    },
  });
});
