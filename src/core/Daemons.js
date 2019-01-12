import ForgeRequest from './ForgeRequest';

class Daemons extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/daemons`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/daemons`);
  }

  get(serverId, daemonId) {
    return this.makeRequest('get', `/servers/${serverId}/daemons/${daemonId}`);
  }

  delete(serverId, daemonId) {
    return this.makeRequest('delete', `/servers/${serverId}/daemons/${daemonId}`);
  }

  restart(serverId, daemonId) {
    return this.makeRequest('post', `/servers/${serverId}/daemons/${daemonId}/restart`);
  }
}

export default Daemons;
