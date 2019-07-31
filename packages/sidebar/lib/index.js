"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _flex = require("@cda/flex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  width: ", ";\n  padding: 1rem;\n  z-index: 1;\n  cursor: pointer;\n  overflow: hidden;\n\n  :hover {\n    background-color: ", ";\n    color: ", ";\n    width: 15rem;\n    transition: 0.25s width ease-in-out;\n  }\n  \n  p {\n    float: left;\n    left: 3em;\n    font-size: 1.25rem;\n    margin: 0;\n    height: 2rem;\n    margin-left: 1rem;\n    overflow: hidden;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   width: ", ";\n   overflow: visible;\n   \n   div {\n      z-index: 10;\n   }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledRows = (0, _styled["default"])(_flex.Rows)(_templateObject(), function (_ref) {
  var compact = _ref.compact;
  return compact ? '5rem' : '15rem';
});
var StyledLink = (0, _styled["default"])(_reactRouterDom.Link)(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var compact = _ref3.compact;
  return compact ? '4rem' : '15rem';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
});

var Sidebar = function Sidebar(_ref6) {
  var items = _ref6.items,
      _ref6$compact = _ref6.compact,
      compact = _ref6$compact === void 0 ? true : _ref6$compact;
  return _react["default"].createElement(StyledRows, {
    compact: compact
  }, items.map(function (_ref7) {
    var icon = _ref7.icon,
        label = _ref7.label,
        link = _ref7.link;
    return _react["default"].createElement(_flex.Item, {
      noGutter: true
    }, _react["default"].createElement(StyledLink, {
      to: link,
      compact: compact
    }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon,
      size: "2x"
    }), _react["default"].createElement("p", null, label)));
  }));
};

var _default = Sidebar;
exports["default"] = _default;