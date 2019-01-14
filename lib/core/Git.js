"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Git extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  install(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/git`, payload);
  }

  update(serverId, siteId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/sites/${siteId}/git`, payload);
  }

  remove(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/git`);
  }

}

var _default = Git;
exports.default = _default;