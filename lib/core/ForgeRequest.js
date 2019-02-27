"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ForgeRequest =
/*#__PURE__*/
function () {
  function ForgeRequest(token) {
    _classCallCheck(this, ForgeRequest);

    this.token = token;
    this.request = _axios.default.create({
      baseURL: 'https://forge.laravel.com/api/v1/',
      headers: {
        'Authorization': "Bearer ".concat(token),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  _createClass(ForgeRequest, [{
    key: "makeRequest",
    value: function makeRequest(type, path) {
      var _this = this;

      var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        return _this.request[type](path, payload).then(function (response) {
          return resolve(response);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return ForgeRequest;
}();

module.exports = ForgeRequest;