import ForgeRequest from './ForgeRequest';

class Services extends ForgeRequest {
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

export default Services;
