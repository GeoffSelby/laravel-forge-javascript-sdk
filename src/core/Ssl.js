import ForgeRequest from './ForgeRequest';

class Ssl extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/certificates`, payload);
  }

  installExisting(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/certificates`, payload);
  }

  clone(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/certificates`, payload);
  }

  letsencrypt(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/certificates/letsencrypt`, payload);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/certificates`);
  }

  get(serverId, siteId, certId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/certificates/${certId}`);
  }

  csr(serverId, siteId, certId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/certificates/${certId}/csr`);
  }

  install(serverId, siteId, certId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/certificates/${certId}/install`, payload);
  }

  activate(serverId, siteId, certId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/certificates/${certId}/activate`);
  }

  delete(serverId, siteId, certId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/certificates/${certId}`);
  }
}

export default Ssl;
