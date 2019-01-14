"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Recipes extends _ForgeRequest.default {
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

var _default = Recipes;
exports.default = _default;