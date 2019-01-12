"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Php extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  upgrade(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/php/upgrade`);
  }

  enableOPCache(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/php/opcache`);
  }

  disableOPCache(serverId) {
    return this.makeRequest('delete', `/servers/${serverId}/php/opcache`);
  }

}

var _default = Php;
exports.default = _default;