import axios from 'axios';

class ForgeRequest {
  constructor(token) {
    this.token = token;
    this.request = axios.create({
      baseUrl: 'https://forge.laravel.com/api/v1',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}

export default ForgeRequest;