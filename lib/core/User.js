"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ForgeRequest = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User extends _ForgeRequest.default {
  constructor(token) {
    super(token);
    this.token = token;
  }

  get() {
    return this.makeRequest('get', '/user');
  }

}

var _default = User;
exports.default = _default;