"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FirewallRules extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  create(serverId, payload) {
    return this.makeRequest('post', `/servers/${serverId}/firewall-rules`, payload);
  }

  list(serverId) {
    return this.makeRequest('get', `/servers/${serverId}/firewall-rules`);
  }

  get(serverId, ruleId) {
    return this.makeRequest('get', `/servers/${serverId}/firewall-rules/${ruleId}`);
  }

  delete(serverId, ruleId) {
    return this.makeRequest('delete', `/servers/${serverId}/firewall-rules/${ruleId}`);
  }

}

var _default = FirewallRules;
exports.default = _default;