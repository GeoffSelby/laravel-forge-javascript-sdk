"use strict";

var _Servers = _interopRequireDefault(require("./core/Servers"));

var _Services = _interopRequireDefault(require("./core/Services"));

var _User = _interopRequireDefault(require("./core/User"));

var _Daemons = _interopRequireDefault(require("./core/Daemons"));

var _FirewallRules = _interopRequireDefault(require("./core/FirewallRules"));

var _Jobs = _interopRequireDefault(require("./core/Jobs"));

var _Php = _interopRequireDefault(require("./core/Php"));

var _Database = _interopRequireDefault(require("./core/Database"));

var _DatabaseUsers = _interopRequireDefault(require("./core/DatabaseUsers"));

var _Sites = _interopRequireDefault(require("./core/Sites"));

var _Ssl = _interopRequireDefault(require("./core/Ssl"));

var _Ssh = _interopRequireDefault(require("./core/Ssh"));

var _Workers = _interopRequireDefault(require("./core/Workers"));

var _Redirect = _interopRequireDefault(require("./core/Redirect"));

var _Deployment = _interopRequireDefault(require("./core/Deployment"));

var _Config = _interopRequireDefault(require("./core/Config"));

var _Git = _interopRequireDefault(require("./core/Git"));

var _Wordpress = _interopRequireDefault(require("./core/Wordpress"));

var _Webhooks = _interopRequireDefault(require("./core/Webhooks"));

var _Recipes = _interopRequireDefault(require("./core/Recipes"));

var _Regions = _interopRequireDefault(require("./core/Regions"));

var _Credentials = _interopRequireDefault(require("./core/Credentials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Forge = function Forge(token) {
  _classCallCheck(this, Forge);

  this.token = token;
  this.user = new _User.default(token);
  this.servers = new _Servers.default(token);
  this.services = new _Services.default(token);
  this.daemons = new _Daemons.default(token);
  this.firewallRules = new _FirewallRules.default(token);
  this.jobs = new _Jobs.default(token);
  this.php = new _Php.default(token);
  this.database = new _Database.default(token);
  this.databaseUsers = new _DatabaseUsers.default(token);
  this.sites = new _Sites.default(token);
  this.ssl = new _Ssl.default(token);
  this.ssh = new _Ssh.default(token);
  this.workers = new _Workers.default(token);
  this.redirect = new _Redirect.default(token);
  this.deployment = new _Deployment.default(token);
  this.config = new _Config.default(token);
  this.git = new _Git.default(token);
  this.wordpress = new _Wordpress.default(token);
  this.webhooks = new _Webhooks.default(token);
  this.recipes = new _Recipes.default(token);
  this.regions = new _Regions.default(token);
  this.credentials = new _Credentials.default(token);
};

module.exports = Forge;