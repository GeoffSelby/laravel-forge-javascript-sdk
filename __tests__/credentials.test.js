import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it lists credentials', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/credentials', {
    response: {
      credentials: [
        {
          id: 1,
          type: 'ocean2',
          name: 'Personal',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const credentials = await forge.credentials.list();

  expect(credentials.data).toEqual({
    credentials: [
      {
        id: 1,
        type: 'ocean2',
        name: 'Personal',
      },
    ],
  });
});