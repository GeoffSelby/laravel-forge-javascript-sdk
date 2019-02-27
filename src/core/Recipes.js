import ForgeRequest from './ForgeRequest';

class Recipes extends ForgeRequest {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(payload) {
    return this.makeRequest('post', '/recipes', payload);
  }

  list() {
    return this.makeRequest('get', '/recipes');
  }

  get(id) {
    return this.makeRequest('get', `/recipes/${id}`);
  }

  update(id, payload) {
    return this.makeRequest('put', `/recipes/${id}`, payload);
  }

  delete(id) {
    return this.makeRequest('delete', `/recipes/${id}`);
  }

  run(id, payload) {
    return this.makeRequest('post', `/recipes/${id}/run`, payload);
  }
}

module.exports = Recipes;
