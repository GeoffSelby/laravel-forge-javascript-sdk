import ForgeRequest from './ForgeRequest';

class Sites extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/sites`);
  }

  get(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}`);
  }

  update(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}`, payload);
  }

  delete(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}`);
  }

  balance(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/balancing`, payload);
  }
}

export default Sites;
