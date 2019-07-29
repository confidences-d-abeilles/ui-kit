"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactFontawesome = _interopRequireDefault(require("react-fontawesome"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleLink = (0, _styled["default"])(_reactRouterDom.Link)(_templateObject());

var MyLink = function MyLink(_ref) {
  var url = _ref.url,
      to = _ref.to,
      external = _ref.external,
      className = _ref.className,
      children = _ref.children,
      dataCy = _ref['data-cy'];
  return external ? _react["default"].createElement("a", {
    href: url || to,
    target: "_blank",
    rel: "noopener noreferrer",
    "data-cy": dataCy,
    className: className
  }, children || url, "\xA0", _react["default"].createElement(_reactFontawesome["default"], {
    name: "external-link"
  })) : _react["default"].createElement(StyleLink, {
    to: url,
    className: className,
    "data-cy": dataCy
  }, children || url);
};

MyLink.propTypes = {
  external: _propTypes["default"].bool,
  url: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
MyLink.defaultProps = {
  external: false,
  className: null,
  children: null
};
var _default = MyLink;
exports["default"] = _default;