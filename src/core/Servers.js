import ForgeRequest from './ForgeRequest';

class Servers extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(payload) {
    return new Promise((resolve, reject) => this.request.post('/servers', payload)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  list() {
    return new Promise((resolve, reject) => this.request.get('/servers')
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  get(id) {
    return new Promise((resolve, reject) => this.request.get(`/servers/${id}`)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  update(id, payload) {
    return new Promise((resolve, reject) => this.request.put(`/servers/${id}`, payload)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  delete(id) {
    return new Promise((resolve, reject) => this.request.delete(`/servers/${id}`)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  reboot(id) {
    return new Promise((resolve, reject) => this.request.post(`/servers/${id}/reboot`)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  revoke(id) {
    return new Promise((resolve, reject) => this.request.post(`/servers/${id}/revoke`)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  reconnect(id) {
    return new Promise((resolve, reject) => this.request.post(`/servers/${id}/reconnect`)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  reactivate(id) {
    return new Promise((resolve, reject) => this.request.post(`/servers/${id}/reactivate`)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  events(id = null) {
    if (id) {
      return new Promise((resolve, reject) => this.request.get(`/servers/events?server_id=${id}`)
        .then(response => resolve(response))
        .catch(err => reject(err)));
    }

    return new Promise((resolve, reject) => this.request.get('/servers/events')
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }

  updateDbPassword(id, payload) {
    return new Promise((resolve, reject) => this.request.put(`/servers/${id}/database-password`, payload)
      .then(response => resolve(response))
      .catch(err => reject(err)));
  }
}

export default Servers;
