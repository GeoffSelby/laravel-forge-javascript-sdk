import axios from 'axios';

class ForgeRequest {
  constructor(token) {
    this.token = token;
    this.request = axios.create({
      baseUrl: 'https://forge.laravel.com/api/v1',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  makeRequest(type, path, payload = null) {
    return new Promise((resolve, reject) => this.request[type](path, payload)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }
}

export default ForgeRequest;
