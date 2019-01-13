import ForgeRequest from './ForgeRequest';

class Redirect extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/redirect-rules`, payload);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/redirect-rules`);
  }

  get(serverId, siteId, ruleId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/redirect-rules/${ruleId}`);
  }

  delete(serverId, siteId, ruleId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/redirect-rules/${ruleId}`);
  }
}

export default Redirect;
