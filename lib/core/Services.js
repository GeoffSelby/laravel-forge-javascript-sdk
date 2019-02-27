"use strict";

var _ForgeRequest2 = _interopRequireDefault(require("./ForgeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Services =
/*#__PURE__*/
function (_ForgeRequest) {
  _inherits(Services, _ForgeRequest);

  function Services(token) {
    var _this;

    _classCallCheck(this, Services);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Services).call(this, token));
    _this.token = token;
    return _this;
  }

  _createClass(Services, [{
    key: "rebootMysql",
    value: function rebootMysql(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/mysql/reboot"));
    }
  }, {
    key: "stopMysql",
    value: function stopMysql(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/mysql/stop"));
    }
  }, {
    key: "rebootNginx",
    value: function rebootNginx(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/nginx/reboot"));
    }
  }, {
    key: "stopNginx",
    value: function stopNginx(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/nginx/stop"));
    }
  }, {
    key: "rebootPostgres",
    value: function rebootPostgres(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/postgres/reboot"));
    }
  }, {
    key: "stopPostgres",
    value: function stopPostgres(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/postgres/stop"));
    }
  }, {
    key: "rebootPhp",
    value: function rebootPhp(serverId) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/php/reboot"));
    }
  }, {
    key: "installBlackfire",
    value: function installBlackfire(serverId, payload) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/blackfire/install"), payload);
    }
  }, {
    key: "removeBlackfire",
    value: function removeBlackfire(serverId) {
      return this.makeRequest('delete', "/servers/".concat(serverId, "/blackfire/remove"));
    }
  }, {
    key: "installPapertrail",
    value: function installPapertrail(serverId, payload) {
      return this.makeRequest('post', "/servers/".concat(serverId, "/papertrail/install"), payload);
    }
  }, {
    key: "removePapertrail",
    value: function removePapertrail(serverId) {
      return this.makeRequest('delete', "/servers/".concat(serverId, "/papertrail/remove"));
    }
  }]);

  return Services;
}(_ForgeRequest2.default);

module.exports = Services;