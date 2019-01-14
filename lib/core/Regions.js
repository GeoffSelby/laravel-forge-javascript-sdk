"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Regions extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  list() {
    return this.makeRequest('get', '/regions');
  }

}

var _default = Regions;
exports.default = _default;