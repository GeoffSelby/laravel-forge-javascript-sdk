"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Services extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  rebootMysql(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/mysql/reboot`);
  }

  stopMysql(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/mysql/stop`);
  }

  rebootNginx(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/nginx/reboot`);
  }

  stopNginx(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/nginx/stop`);
  }

  rebootPostgres(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/postgres/reboot`);
  }

  stopPostgres(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/postgres/stop`);
  }

  rebootPhp(serverId) {
    return this.makeRequest('post', `/servers/${serverId}/php/reboot`);
  }

  installBlackfire(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/blackfire/install`, payload);
  }

  removeBlackfire(serverId) {
    return this.makeRequest('delete', `/servers/${serverId}/blackfire/remove`);
  }

  installPapertrail(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/papertrail/install`, payload);
  }

  removePapertrail(serverId) {
    return this.makeRequest('delete', `/servers/${serverId}/papertrail/remove`);
  }

}

var _default = Services;
exports.default = _default;