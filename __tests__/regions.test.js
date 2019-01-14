import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it lists regions', async () => {
  moxios.stubRequest('/regions', {
    response: {
      regions: {
        ocean2: [
          {
            id: 'ams2',
            name: 'Amsterdam 2',
            sizes: [
              {
                id: '01',
                size: 's-1vcpu-1gb',
                name: '1GB RAM - 1 CPU Core - 25GB SSD',
              },
            ],
          },
        ],
        linode: [],
        vultr: [],
        aws: [],
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const regions = await forge.regions.list();

  expect(regions.data).toEqual({
    regions: {
      ocean2: [
        {
          id: 'ams2',
          name: 'Amsterdam 2',
          sizes: [
            {
              id: '01',
              size: 's-1vcpu-1gb',
              name: '1GB RAM - 1 CPU Core - 25GB SSD',
            },
          ],
        },
      ],
      linode: [],
      vultr: [],
      aws: [],
    },
  });
});