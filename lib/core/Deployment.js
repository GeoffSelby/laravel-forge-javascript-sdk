"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Deployment extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  enable(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/deployment`);
  }

  disable(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/deployment`);
  }

  getScript(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/deployment/script`);
  }

  updateScript(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/deployment/script`, payload);
  }

  deploy(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/deployment/deploy`);
  }

  reset(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/deployment/reset`);
  }

  log(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/deployment/log`);
  }

}

var _default = Deployment;
exports.default = _default;