import ForgeRequest from './ForgeRequest';

class Credentials extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  list() {
    return this.makeRequest('get', '/credentials');
  }
}

module.exports = Credentials;
