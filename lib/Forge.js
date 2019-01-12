"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Servers = _interopRequireDefault(require("./core/Servers"));

var _Services = _interopRequireDefault(require("./core/Services"));

var _User = _interopRequireDefault(require("./core/User"));

var _Daemons = _interopRequireDefault(require("./core/Daemons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Forge {
  constructor(token) {
    this.token = token;
    this.user = new _User.default(token);
    this.servers = new _Servers.default(token);
    this.services = new _Services.default(token);
    this.daemons = new _Daemons.default(token);
  }

}

var _default = Forge;
exports.default = _default;