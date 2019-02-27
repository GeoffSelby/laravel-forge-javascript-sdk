import ForgeRequest from './ForgeRequest';

class Regions extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  list() {
    return this.makeRequest('get', '/regions');
  }
}

module.exports = Regions;
