import ForgeRequest from './ForgeRequest';

class FirewallRules extends ForgeRequest {
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

export default FirewallRules;
