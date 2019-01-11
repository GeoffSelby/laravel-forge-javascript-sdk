"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Servers extends _ForgeRequest.default {
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

  events() {
    let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (id) {
      return this.makeRequest('get', `/servers/events?server_id=${id}`);
    }

    return this.makeRequest('get', '/servers/events');
  }

  updateDbPassword(id, payload) {
    return this.makeRequest('put', `/servers/${id}/database-password`, payload);
  }

}

var _default = Servers;
exports.default = _default;