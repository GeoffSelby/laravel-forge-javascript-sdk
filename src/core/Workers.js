import ForgeRequest from './ForgeRequest';

class Workers extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/workers`, payload);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/workers`);
  }

  get(serverId, siteId, workerId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/workers/${workerId}`);
  }

  delete(serverId, siteId, workerId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/workers/${workerId}`);
  }

  restart(serverId, siteId, workerId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/workers/${workerId}/restart`);
  }
}

module.exports = Workers;
