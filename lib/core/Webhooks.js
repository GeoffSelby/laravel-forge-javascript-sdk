"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Webhooks extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, siteId) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/webhooks`);
  }

  list(serverId, siteId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/webhooks`);
  }

  get(serverId, siteId, hookId) {
    return this.makeRequest('get', `/servers/${serverId}/sites/${siteId}/webhooks/${hookId}`);
  }

  delete(serverId, siteId, hookId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/webhooks/${hookId}`);
  }

}

var _default = Webhooks;
exports.default = _default;