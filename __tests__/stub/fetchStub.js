exports.setupFetchStub = () => {
  window.fetch.mockImplementation(() => {
    const fetchResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          status: 200,
        }),
      text: () => Promise.resolve('Sample response text'),
    };
    return Promise.resolve(fetchResponse);
  });
};

exports.expectToHaveBeenCalledWith = (endpoint, method, body = undefined) => {
  expect(window.fetch).toHaveBeenCalledWith(
    `https://forge.laravel.com/api/v1${endpoint}`,
    expect.objectContaining({
      method,
      body: JSON.stringify(body),
      headers: {
        Authorization: 'Bearer API_TOKEN',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  );
};
