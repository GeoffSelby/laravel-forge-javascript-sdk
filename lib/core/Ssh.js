"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ssh extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/keys`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/keys`);
  }

  get(serverId, keyId) {
    return this.makeRequest('get', `/servers/${serverId}/keys/${keyId}`);
  }

  delete(serverId, keyId) {
    return this.makeRequest('delete', `/servers/${serverId}/keys/${keyId}`);
  }

}

var _default = Ssh;
exports.default = _default;