import ForgeRequest from './ForgeRequest';

class Jobs extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/jobs`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/jobs`);
  }

  get(serverId, jobId) {
    return this.makeRequest('get', `/servers/${serverId}/jobs/${jobId}`);
  }

  delete(serverId, jobId) {
    return this.makeRequest('delete', `/servers/${serverId}/jobs/${jobId}`);
  }
}

export default Jobs;
