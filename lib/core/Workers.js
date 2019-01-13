"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Workers extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/workers`, payload);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/workers`);
  }

  get(serverId, siteId, workerId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/workers/${workerId}`);
  }

  delete(serverId, siteId, workerId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/workers/${workerId}`);
  }

  restart(serverId, siteId, workerId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/workers/${workerId}/restart`);
  }

}

var _default = Workers;
exports.default = _default;