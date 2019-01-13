import ForgeRequest from './ForgeRequest';

class Deployment extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  enable(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/deployment`);
  }

  disable(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/deployment`);
  }

  getScript(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/deployment/script`);
  }

  updateScript(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/deployment/script`, payload);
  }

  deploy(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/deployment/deploy`);
  }

  reset(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/deployment/reset`);
  }

  log(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/deployment/log`);
  }
}

export default Deployment;
