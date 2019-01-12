"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DatabaseUsers extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/mysql-users`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql-users`);
  }

  get(serverId, userId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql-users/${userId}`);
  }

  update(serverId, userId, payload) {
    return this.makeRequest('put', `/servers/${serverId}/mysql-users/${userId}`, payload);
  }

  delete(serverId, userId) {
    return this.makeRequest('delete', `/servers/${serverId}/mysql-users/${userId}`);
  }

}

var _default = DatabaseUsers;
exports.default = _default;