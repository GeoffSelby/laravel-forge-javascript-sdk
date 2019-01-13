import moxios from 'moxios';
import Forge from '../src/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new redirect rule', async () => {
  moxios.stubRequest('/servers/1/sites/1/redirect-rules', {
    response: {
      redirect_rule: {
        id: 1,
        from: '/docs',
        to: '/docs/1.1',
        created_at: '2018-03-07 16:33:20',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const rule = await forge.redirect.create(1, 1, {
    from: '/docs',
    to: '/docs/1.1',
    type: 'redirect',
  });

  expect(rule.data).toEqual({
    redirect_rule: {
      id: 1,
      from: '/docs',
      to: '/docs/1.1',
      created_at: '2018-03-07 16:33:20',
    },
  });
});

test('it lists all rules for a given site', async () => {
  moxios.stubRequest('/servers/1/sites/1/redirect-rules', {
    response: {
      redirect_rules: [
        {
          id: 1,
          from: '/docs',
          to: '/docs/1.1',
          created_at: '2018-03-07 16:33:20',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const rules = await forge.redirect.list(1, 1);

  expect(rules.data).toEqual({
    redirect_rules: [
      {
        id: 1,
        from: '/docs',
        to: '/docs/1.1',
        created_at: '2018-03-07 16:33:20',
      },
    ],
  });
});

test('it gets a given rule', async () => {
  moxios.stubRequest('/servers/1/sites/1/redirect-rules/1', {
    response: {
      redirect_rule: {
        id: 1,
        from: '/docs',
        to: '/docs/1.1',
        created_at: '2018-03-07 16:33:20',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const rule = await forge.redirect.get(1, 1, 1);

  expect(rule.data).toEqual({
    redirect_rule: {
      id: 1,
      from: '/docs',
      to: '/docs/1.1',
      created_at: '2018-03-07 16:33:20',
    },
  });
});

test('it deletes a given rule', async () => {
  moxios.stubRequest('/servers/1/sites/1/redirect-rules/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const rule = await forge.redirect.delete(1, 1, 1);

  expect(rule.status).toEqual(200);
});
