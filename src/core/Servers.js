import ForgeRequest from './ForgeRequest';

class Servers extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(payload) {
    return this.makeRequest('post', '/servers', payload);
  }

  list() {
    return this.makeRequest('get', '/servers');
  }

  get(id) {
    return this.makeRequest('get', `/servers/${id}`);
  }

  update(id, payload) {
    return this.makeRequest('put', `/servers/${id}`, payload);
  }

  delete(id) {
    return this.makeRequest('delete', `/servers/${id}`);
  }

  reboot(id) {
    return this.makeRequest('post', `/servers/${id}/reboot`);
  }

  revoke(id) {
    return this.makeRequest('post', `/servers/${id}/revoke`);
  }

  reconnect(id) {
    return this.makeRequest('post', `/servers/${id}/reconnect`);
  }

  reactivate(id) {
    return this.makeRequest('post', `/servers/${id}/reactivate`);
  }

  events(id = null) {
    if (id) {
      return this.makeRequest('get', `/servers/events?server_id=${id}`);
    }

    return this.makeRequest('get', '/servers/events');
  }

  updateDbPassword(id, payload) {
    return this.makeRequest('put', `/servers/${id}/database-password`, payload);
  }
}

module.exports = Servers;
