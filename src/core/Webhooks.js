import ForgeRequest from './ForgeRequest';

class Webhooks extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/webhooks`);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/webhooks`);
  }

  get(serverId, siteId, hookId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/webhooks/${hookId}`);
  }

  delete(serverId, siteId, hookId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/webhooks/${hookId}`);
  }
}

module.exports = Webhooks;
