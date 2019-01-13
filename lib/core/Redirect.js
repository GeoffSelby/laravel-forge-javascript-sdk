"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Redirect extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/redirect-rules`, payload);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/redirect-rules`);
  }

  get(serverId, siteId, ruleId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/redirect-rules/${ruleId}`);
  }

  delete(serverId, siteId, ruleId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/redirect-rules/${ruleId}`);
  }

}

var _default = Redirect;
exports.default = _default;