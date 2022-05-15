import 'cross-fetch/polyfill';

class ForgeRequest {
  constructor(token) {
    this._token = token;
    this._baseURL = 'https://forge.laravel.com/api/v1';
  }

  async _fetchJSON(endpoint, options = {}, parseResponse = true) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: {
        Authorization: `Bearer ${this._token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(res.statusText);

    if (parseResponse !== false && res.status !== 204) {
      const json = await res.json();
      return json;
    }

    const text = await res.text();
    return text;
  }

  get(endpoint, options = {}, parseResponse = true) {
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        body: undefined,
        method: 'GET',
      },
      parseResponse,
    );
  }

  post(endpoint, body, options = {}, parseResponse = true) {
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        body: body ? JSON.stringify(body) : undefined,
        method: 'POST',
      },
      parseResponse,
    );
  }

  put(endpoint, body, options = {}, parseResponse = true) {
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        body: body ? JSON.stringify(body) : undefined,
        method: 'POST',
      },
      parseResponse,
    );
  }

  patch(endpoint, operations, options = {}) {
    return this._fetchJSON(
      endpoint,
      {
      ...options,
      body: JSON.stringify(operations),
      method: 'PATCH',
      },
      false,
    );
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
