"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ForgeRequest {
  constructor(token) {
    this.token = token;
    this.request = _axios.default.create({
      baseUrl: 'https://forge.laravel.com/api/v1',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}

var _default = ForgeRequest;
exports.default = _default;