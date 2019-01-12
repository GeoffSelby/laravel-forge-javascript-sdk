"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Database extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/mysql`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql`);
  }

  get(serverId, databaseId) {
    return this.makeRequest('get', `/servers/${serverId}/mysql/${databaseId}`);
  }

  delete(serverId, databaseId) {
    return this.makeRequest('delete', `/servers/${serverId}/mysql/${databaseId}`);
  }

}

var _default = Database;
exports.default = _default;