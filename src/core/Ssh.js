import ForgeRequest from './ForgeRequest';

class Ssh extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/keys`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/keys`);
  }

  get(serverId, keyId) {
    return this.makeRequest('get', `/servers/${serverId}/keys/${keyId}`);
  }

  delete(serverId, keyId) {
    return this.makeRequest('delete', `/servers/${serverId}/keys/${keyId}`);
  }
}

module.exports = Ssh;
