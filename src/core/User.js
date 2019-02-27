import ForgeRequest from './ForgeRequest';

class User extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  get() {
    return this.makeRequest('get', '/user');
  }
}

module.exports = User;
