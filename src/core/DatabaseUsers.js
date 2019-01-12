import ForgeRequest from './ForgeRequest';

class DatabaseUsers extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/mysql-users`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql-users`);
  }

  get(serverId, userId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql-users/${userId}`);
  }

  update(serverId, userId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/mysql-users/${userId}`, payload);
  }

  delete(serverId, userId) {
    return this.makeRequest('delete', `/servers/${serverId}/mysql-users/${userId}`);
  }
}

export default DatabaseUsers;
