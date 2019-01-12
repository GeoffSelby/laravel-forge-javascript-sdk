"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sites extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/sites`);
  }

  get(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}`);
  }

  update(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}`, payload);
  }

  delete(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}`);
  }

  balance(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/balancing`, payload);
  }

}

var _default = Sites;
exports.default = _default;