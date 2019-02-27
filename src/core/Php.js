import ForgeRequest from './ForgeRequest';

class Php extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  upgrade(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/php/upgrade`);
  }

  enableOPCache(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/php/opcache`);
  }

  disableOPCache(serverId) {
    return this.makeRequest('delete', `/servers/${serverId}/php/opcache`);
  }
}

module.exports = Php;
