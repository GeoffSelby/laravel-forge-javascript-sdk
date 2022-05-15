import 'cross-fetch/polyfill';

class ForgeRequest {
  constructor(token) {
    this._token = token;
    this._baseURL = 'https://forge.laravel.com/api/v1';
  }

  async _fetchJSON(endpoint, options = {}) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: {
        Authorization: `Bearer ${this._token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return res.text();
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: undefined,
      method: 'GET',
    });
  }

  post(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'POST',
    });
  }

  put(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'POST',
    });
  }

  patch(endpoint, operations, options = {}) {
    return this._fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      body: JSON.stringify(operations),
      method: 'PATCH',
    });
  }

  delete(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: undefined,
      method: 'DELETE',
    });
  }
}

export default ForgeRequest;
