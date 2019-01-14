"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Wordpress extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  install(serverId, siteId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/sites/${siteId}/wordpress`, payload);
  }

  uninstall(serverId, siteId) {
    return this.makeRequest('delete', `/servers/${serverId}/sites/${siteId}/wordpress`);
  }

}

var _default = Wordpress;
exports.default = _default;