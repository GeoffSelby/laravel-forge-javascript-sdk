import ForgeRequest from './ForgeRequest';

class Config extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  getNginx(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/nginx`);
  }

  updateNginx(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/nginx`, payload);
  }

  getEnv(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/env`);
  }

  updateEnv(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/env`, payload);
  }
}

export default Config;
