import ForgeRequest from './ForgeRequest';

class Git extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  install(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/git`, payload);
  }

  update(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/git`, payload);
  }

  remove(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/git`);
  }
}

export default Git;
