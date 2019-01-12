"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Daemons extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/daemons`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/daemons`);
  }

  get(serverId, daemonId) {
    return this.makeRequest('get', `/servers/${serverId}/daemons/${daemonId}`);
  }

  delete(serverId, daemonId) {
    return this.makeRequest('delete', `/servers/${serverId}/daemons/${daemonId}`);
  }

  restart(serverId, daemonId) {
    return this.makeRequest('post', `/servers/${serverId}/daemons/${daemonId}/restart`);
  }

}

var _default = Daemons;
exports.default = _default;