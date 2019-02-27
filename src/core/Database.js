import ForgeRequest from './ForgeRequest';

class Database extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/mysql`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql`);
  }

  get(serverId, databaseId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql/${databaseId}`);
  }

  delete(serverId, databaseId) {
    return this.makeRequest('delete', `/servers/${serverId}/mysql/${databaseId}`);
  }
}

module.exports = Database;
