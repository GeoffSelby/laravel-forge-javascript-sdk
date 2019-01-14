"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Config extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  getNginx(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/nginx`);
  }

  updateNginx(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/nginx`, payload);
  }

  getEnv(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/env`);
  }

  updateEnv(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/env`, payload);
  }

}

var _default = Config;
exports.default = _default;