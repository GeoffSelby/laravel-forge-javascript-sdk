(function (factory) {
  typeof define === 'function' && define.amd ? define(['cross-fetch/polyfill'], factory) :
  factory();
}((function () { 'use strict';

  class ForgeRequest {
    constructor(token) {
      this._token = token;
      this._baseURL = 'https://forge.laravel.com/api/v1';
    }

    async _fetchJSON(endpoint, options = {}) {
      const res = await fetch(this._baseURL + endpoint, {
        ...options,
        headers: {
          Authorization: `Bearer ${this._token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error(res.statusText);

      if (options.parseResponse !== false && res.status !== 204)
        return res.json();

      return undefined;
    }

    get(endpoint, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        body: undefined,
        method: 'GET',
      });
    }

    post(endpoint, body, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        body: body ? JSON.stringify(body) : undefined,
        method: 'POST',
      });
    }

    put(endpoint, body, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        body: body ? JSON.stringify(body) : undefined,
        method: 'POST',
      });
    }

    patch(endpoint, operations, options = {}) {
      return this._fetchJSON(endpoint, {
        parseResponse: false,
        ...options,
        body: JSON.stringify(operations),
        method: 'PATCH',
      });
    }

    delete(endpoint, options = {}) {
      return this._fetchJSON(endpoint, {
        ...options,
        body: undefined,
        method: 'DELETE',
      });
    }
  }

  class Forge extends ForgeRequest {
    constructor(token) {
      super(token);
    }

    get user() {
      return {
        get: () => this.get('/user'),
      };
    }

    get servers() {
      return {
        create: (payload) => this.post('/servers', payload),
        list: () => this.get('/servers'),
        get: (id) => this.get(`/servers/${id}`),
        update: (id, payload) => this.put(`/servers/${id}`, payload),
        delete: (id) => this.delete(`/servers/${id}`),
        reboot: (id) => this.post(`/servers/${id}/reboot`),
        revoke: (id) => this.post(`/servers/${id}/revoke`),
        reconnect: (id) => this.post(`/servers/${id}/reconnect`),
        reactivate: (id) => this.post(`/servers/${id}/reactivate`),
        events: (id = null) =>
          !id
            ? this.get('/servers/events')
            : this.get(`/servers/events?server_id=${id}`),
        updateDbPassword: (id, payload) =>
          this.put(`/servers/${id}/database-password`, payload),
      };
    }

    get services() {
      return {
        startService: (id, payload) =>
          this.post(`/servers/${id}/services/start`, payload),
        stopService: (id, payload) =>
          this.post(`/servers/${id}/services/stop`, payload),
        restartService: (id, payload) =>
          this.post(`/servers/${id}/services/restart`, payload),
        rebootMysql: (id) => this.post(`/servers/${id}/mysql/reboot`),
        stopMysql: (id) => this.post(`/servers/${id}/mysql/stop`),
        rebootNginx: (id) => this.post(`/servers/${id}/nginx/reboot`),
        stopNginx: (id) => this.post(`/servers/${id}/nginx/stop`),
        testNginx: (id) => this.get(`/servers/${id}/nginx/test`),
        rebootPostgres: (id) => this.post(`/servers/${id}/postgres/reboot`),
        stopPostgres: (id) => this.post(`/servers/${id}/postgres/stop`),
        rebootPhp: (id, payload) =>
          this.post(`/servers/${id}/php/reboot`, payload),
        installBlackfire: (id, payload) =>
          this.post(`/servers/${id}/blackfire/install`, payload),
        removeBlackfire: (id) => this.delete(`/servers/${id}/blackfire/remove`),
        installPapertrail: (id, payload) =>
          this.post(`/servers/${id}/papertrail/install`, payload),
        removePapertrail: (id) => this.delete(`/servers/${id}/papertrail/remove`),
      };
    }

    get daemons() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/daemons`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/daemons`),
        get: (serverId, daemonId) =>
          this.get(`/servers/${serverId}/daemons/${daemonId}`),
        delete: (serverId, daemonId) =>
          this.delete(`/servers/${serverId}/daemons/${daemonId}`),
        restart: (serverId, daemonId) =>
          this.post(`/servers/${serverId}/daemons/${daemonId}/restart`),
      };
    }

    get firewallRules() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/firewall-rules`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/firewall-rules`),
        get: (serverId, ruleId) =>
          this.get(`/servers/${serverId}/firewall-rules/${ruleId}`),
        delete: (serverId, ruleId) =>
          this.delete(`/servers/${serverId}/firewall-rules/${ruleId}`),
      };
    }

    get jobs() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/jobs`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/jobs`),
        get: (serverId, jobId) => this.get(`/servers/${serverId}/jobs/${jobId}`),
        delete: (serverId, jobId) =>
          this.delete(`/servers/${serverId}/jobs/${jobId}`),
      };
    }

    get php() {
      return {
        list: (serverId) => this.get(`/servers/${serverId}/php`),
        install: (serverId, payload) =>
          this.post(`/servers/${serverId}/php`, payload),
        update: (serverId, payload) =>
          this.post(`/servers/${serverId}/php/update`, payload),
        enableOPCache: (serverId) =>
          this.post(`/servers/${serverId}/php/opcache`),
        disableOPCache: (serverId) =>
          this.delete(`/servers/${serverId}/php/opcache`),
      };
    }

    get database() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/databases`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/databases`),
        get: (serverId, databaseId) =>
          this.get(`/servers/${serverId}/databases/${databaseId}`),
        delete: (serverId, databaseId) =>
          this.delete(`/servers/${serverId}/databases/${databaseId}`),
      };
    }

    get databaseUsers() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/database-users`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/database-users`),
        get: (serverId, userId) =>
          this.get(`/servers/${serverId}/database-users/${userId}`),
        update: (serverId, userId, payload) =>
          this.put(`/servers/${serverId}/database-users/${userId}`, payload),
        delete: (serverId, userId) =>
          this.delete(`/servers/${serverId}/database-users/${userId}`),
      };
    }

    get nginxTemplates() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/nginx/templates`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/nginx/templates`),
        get: (serverId, templateId) =>
          this.get(`/servers/${serverId}/nginx/templates/${templateId}`),
        update: (serverId, templateId, payload) =>
          this.put(`/servers/${serverId}/nginx/templates/${templateId}`, payload),
        delete: (serverId, templateId) =>
          this.delete(`/servers/${serverId}/nginx/templates/${templateId}`),
      };
    }

    get sites() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/sites`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/sites`),
        get: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}`),
        update: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}`, payload),
        delete: (serverId, siteId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}`),
        php: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}/php`, payload),
        alias: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}/aliases`, payload),
        balance: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}/balancing`, payload),
        log: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/logs`),
      };
    }

    get ssl() {
      return {
        create: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/certificates`, payload),
        installExisting: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/certificates`, payload),
        clone: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/certificates`, payload),
        letsencrypt: (serverId, siteId, payload) =>
          this.post(
            `/servers/${serverId}/sites/${siteId}/certificates/letsencrypt`,
            payload,
          ),
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/certificates`),
        get: (serverId, siteId, certId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/certificates/${certId}`),
        csr: (serverId, siteId, certId) =>
          this.get(
            `/servers/${serverId}/sites/${siteId}/certificates/${certId}/csr`,
          ),
        install: (serverId, siteId, certId, payload) =>
          this.post(
            `/servers/${serverId}/sites/${siteId}/certificates/${certId}/install`,
            payload,
          ),
        activate: (serverId, siteId, certId) =>
          this.post(
            `/servers/${serverId}/sites/${siteId}/certificates/${certId}/activate`,
          ),
        delete: (serverId, siteId, certId) =>
          this.delete(
            `/servers/${serverId}/sites/${siteId}/certificates/${certId}`,
          ),
      };
    }

    get ssh() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/keys`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/keys`),
        get: (serverId, keyId) => this.get(`/servers/${serverId}/keys/${keyId}`),
        delete: (serverId, keyId) =>
          this.delete(`/servers/${serverId}/keys/${keyId}`),
      };
    }

    get workers() {
      return {
        create: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/workers`, payload),
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/workers`),
        get: (serverId, siteId, workerId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/workers/${workerId}`),
        delete: (serverId, siteId, workerId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}/workers/${workerId}`),
        restart: (serverId, siteId, workerId) =>
          this.post(
            `/servers/${serverId}/sites/${siteId}/workers/${workerId}/restart`,
          ),
      };
    }

    get redirect() {
      return {
        create: (serverId, siteId, payload) =>
          this.post(
            `/servers/${serverId}/sites/${siteId}/redirect-rules`,
            payload,
          ),
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/redirect-rules`),
        get: (serverId, siteId, ruleId) =>
          this.get(
            `/servers/${serverId}/sites/${siteId}/redirect-rules/${ruleId}`,
          ),
        delete: (serverId, siteId, ruleId) =>
          this.delete(
            `/servers/${serverId}/sites/${siteId}/redirect-rules/${ruleId}`,
          ),
      };
    }

    get security() {
      return {
        create: (serverId, siteId, payload) =>
          this.post(
            `/servers/${serverId}/sites/${siteId}/security-rules`,
            payload,
          ),
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/security-rules`),
        get: (serverId, siteId, ruleId) =>
          this.get(
            `/servers/${serverId}/sites/${siteId}/security-rules/${ruleId}`,
          ),
        delete: (serverId, siteId, ruleId) =>
          this.delete(
            `/servers/${serverId}/sites/${siteId}/security-rules/${ruleId}`,
          ),
      };
    }

    get deployment() {
      return {
        enable: (serverId, siteId) =>
          this.post(`/servers/${serverId}/sites/${siteId}/deployment`),
        disable: (serverId, siteId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}/deployment`),
        getScript: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/deployment/script`),
        updateScript: (serverId, siteId, payload) =>
          this.put(
            `/servers/${serverId}/sites/${siteId}/deployment/script`,
            payload,
          ),
        deploy: (serverId, siteId) =>
          this.post(`/servers/${serverId}/sites/${siteId}/deployment/deploy`),
        reset: (serverId, siteId) =>
          this.post(`/servers/${serverId}/sites/${siteId}/deployment/reset`),
        log: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/deployment/log`),
      };
    }

    get deploymentHistory() {
      return {
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/deployment-history`),
        get: (serverId, siteId, deploymentId) =>
          this.get(
            `/servers/${serverId}/sites/${siteId}/deployment-history/${deploymentId}`,
          ),
        output: (serverId, siteId, deploymentId) =>
          this.get(
            `/servers/${serverId}/sites/${siteId}/deployment-history/${deploymentId}/output`,
          ),
      };
    }

    get config() {
      return {
        getNginx: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/nginx`),
        updateNginx: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}/nginx`, payload),
        getEnv: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/env`),
        updateEnv: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}/env`, payload),
      };
    }

    get git() {
      return {
        install: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/git`, payload),
        update: (serverId, siteId, payload) =>
          this.put(`/servers/${serverId}/sites/${siteId}/git`, payload),
        remove: (serverId, siteId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}/git`),
      };
    }

    get commands() {
      return {
        execute: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/commands`, payload),
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/commands`),
        get: (serverId, siteId, commandId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/commands/${commandId}`),
      };
    }

    get wordpress() {
      return {
        install: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/wordpress`, payload),
        uninstall: (serverId, siteId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}/wordpress`),
      };
    }

    get phpMyAdmin() {
      return {
        install: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/phpmyadmin`, payload),
        uninstall: (serverId, siteId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}/phpmyadmin`),
      };
    }

    get webhooks() {
      return {
        create: (serverId, siteId, payload) =>
          this.post(`/servers/${serverId}/sites/${siteId}/webhooks`, payload),
        list: (serverId, siteId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/webhooks`),
        get: (serverId, siteId, hookId) =>
          this.get(`/servers/${serverId}/sites/${siteId}/webhooks/${hookId}`),
        delete: (serverId, siteId, hookId) =>
          this.delete(`/servers/${serverId}/sites/${siteId}/webhooks/${hookId}`),
      };
    }

    get recipes() {
      return {
        create: (payload) => this.post('/recipes', payload),
        list: () => this.get('/recipes'),
        get: (id) => this.get(`/recipes/${id}`),
        update: (id, payload) => this.put(`/recipes/${id}`, payload),
        delete: (id) => this.delete(`/recipes/${id}`),
        run: (id, payload) => this.post(`/recipes/${id}/run`, payload),
      };
    }

    get regions() {
      return {
        list: () => this.get('/regions'),
      };
    }

    get credentials() {
      return {
        list: () => this.get('/credentials'),
      };
    }

    get backups() {
      return {
        createConfig: (serverId, payload) =>
          this.post(`/servers/${serverId}/backup-configs`, payload),
        listConfigs: (serverId) =>
          this.get(`/servers/${serverId}/backup-configs`),
        getConfig: (serverId, configId) =>
          this.get(`/servers/${serverId}/backup-configs/${configId}`),
        updateConfig: (serverId, configId, payload) =>
          this.put(`/servers/${serverId}/backup-configs/${configId}`, payload),
        deleteConfig: (serverId, configId) =>
          this.delete(`/servers/${serverId}/backup-configs/${configId}`),
        runConfig: (serverId, configId) =>
          this.post(`/servers/${serverId}/backup-configs/${configId}`),
        restore: (serverId, configId, backupId, payload = {}) =>
          this.post(
            `/servers/${serverId}/backup-configs/${configId}/backups/${backupId}`,
            payload,
          ),
        delete: (serverId, configId, backupId) =>
          this.delete(
            `/servers/${serverId}/backup-configs/${configId}/backups/${backupId}`,
          ),
      };
    }

    get monitors() {
      return {
        create: (serverId, payload) =>
          this.post(`/servers/${serverId}/monitors`, payload),
        list: (serverId) => this.get(`/servers/${serverId}/monitors`),
        get: (serverId, monitorId) =>
          this.get(`/servers/${serverId}/monitors/${monitorId}`),
        delete: (serverId, monitorId) =>
          this.delete(`/servers/${serverId}/monitors/${monitorId}`),
      };
    }

    get logs() {
      return {
        get: (serverId, fileType) =>
          this.get(`/servers/${serverId}/logs?file=${fileType}`),
      };
    }
  }

  module.exports = Forge;

})));
