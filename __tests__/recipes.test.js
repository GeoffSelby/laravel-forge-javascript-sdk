import moxios from 'moxios';
import Forge from '../lib/Forge';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('it creates a new recipe', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/recipes', {
    response: {
      recipe: {
        id: 1,
        name: 'Recipe Name',
        user: 'root',
        script: 'SCRIPT_CONTENT',
        created_at: '2016-12-16 16:24:05',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const recipe = await forge.recipes.create({
    name: 'Recipe Name',
    user: 'root',
    script: 'SCRIPT_CONTENT',
  });

  expect(recipe.data).toEqual({
    recipe: {
      id: 1,
      name: 'Recipe Name',
      user: 'root',
      script: 'SCRIPT_CONTENT',
      created_at: '2016-12-16 16:24:05',
    },
  });
});

test('it lists all recipes', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/recipes', {
    response: {
      recipes: [
        {
          id: 1,
          name: 'Recipe Name',
          user: 'root',
          script: 'SCRIPT_CONTENT',
          created_at: '2016-12-16 16:24:05',
        },
      ],
    },
  });

  const forge = new Forge('API_TOKEN');
  const recipes = await forge.recipes.list();

  expect(recipes.data).toEqual({
    recipes: [
      {
        id: 1,
        name: 'Recipe Name',
        user: 'root',
        script: 'SCRIPT_CONTENT',
        created_at: '2016-12-16 16:24:05',
      },
    ],
  });
});

test('it gets a given recipe', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/recipes/1', {
    response: {
      recipe: {
        id: 1,
        name: 'Recipe Name',
        user: 'root',
        script: 'SCRIPT_CONTENT',
        created_at: '2016-12-16 16:24:05',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const recipe = await forge.recipes.get(1);

  expect(recipe.data).toEqual({
    recipe: {
      id: 1,
      name: 'Recipe Name',
      user: 'root',
      script: 'SCRIPT_CONTENT',
      created_at: '2016-12-16 16:24:05',
    },
  });
});

test('it updates a given recipe', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/recipes/1', {
    response: {
      recipe: {
        id: 1,
        name: 'Recipe Name',
        user: 'root',
        script: 'SCRIPT_CONTENT',
        created_at: '2016-12-16 16:24:05',
      },
    },
  });

  const forge = new Forge('API_TOKEN');
  const recipe = await forge.recipes.update(1, {
    name: 'Recipe Name',
    user: 'root',
    script: 'SCRIPT_CONTENT',
  });

  expect(recipe.data).toEqual({
    recipe: {
      id: 1,
      name: 'Recipe Name',
      user: 'root',
      script: 'SCRIPT_CONTENT',
      created_at: '2016-12-16 16:24:05',
    },
  });
});

test('it deletes a given recipe', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/recipes/1', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const recipe = await forge.recipes.delete(1);

  expect(recipe.status).toEqual(200);
});

test('it runs a given recipe', async () => {
  moxios.stubRequest('https://forge.laravel.com/api/v1/recipes/1/run', {
    status: 200,
  });

  const forge = new Forge('API_TOKEN');
  const recipe = await forge.recipes.run(1, {
    servers: [
      1,
      2,
    ],
  });

  expect(recipe.status).toEqual(200);
});
