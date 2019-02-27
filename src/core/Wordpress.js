import ForgeRequest from './ForgeRequest';

class Wordpress extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  install(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/wordpress`, payload);
  }

  uninstall(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/wordpress`);
  }
}

module.exports = Wordpress;
