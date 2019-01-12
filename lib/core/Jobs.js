"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Jobs extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/jobs`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/jobs`);
  }

  get(serverId, jobId) {
    return this.makeRequest('get', `/servers/${serverId}/jobs/${jobId}`);
  }

  delete(serverId, jobId) {
    return this.makeRequest('delete', `/servers/${serverId}/jobs/${jobId}`);
  }

}

var _default = Jobs;
exports.default = _default;