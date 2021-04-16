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

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledRows = (0, _styled["default"])(_flex.Columns)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  overflow: visible;\n  \n  div {\n    z-index: 10;\n  }\n"])), function (_ref) {
  var isCompact = _ref.isCompact;
  return isCompact ? '5rem' : null;
});
var StyledLink = (0, _styled["default"])(_reactRouterDom.Link, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'isCompact';
  }
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  width: ", ";\n  padding: 1rem;\n  z-index: 1;\n  cursor: pointer;\n  overflow: hidden;\n\n  :hover {\n    background-color: ", ";\n    color: ", ";\n    width: ", ";\n    transition: 0.25s width ease-in-out;\n  }\n  \n  p {\n    float: left;\n    left: 3em;\n    vertical-align: middle;\n    font-size: rem;\n    margin: 0;\n    line-height: 2rem;\n    height: 2rem;\n    margin-left: 1rem;\n    overflow: hidden;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var isCompact = _ref3.isCompact;
  return isCompact ? '5rem' : 'auto';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}, function (_ref6) {
  var isCompact = _ref6.isCompact;
  return isCompact ? '15rem' : null;
});

var Sidebar = function Sidebar(_ref7) {
  var items = _ref7.items,
      _ref7$compact = _ref7.compact,
      compact = _ref7$compact === void 0 ? true : _ref7$compact;
  return /*#__PURE__*/_react["default"].createElement(StyledRows, {
    isCompact: compact
  }, items.map(function (_ref8) {
    var icon = _ref8.icon,
        label = _ref8.label,
        link = _ref8.link;
    return /*#__PURE__*/_react["default"].createElement(_flex.Item, {
      key: label,
      noGutter: true
    }, /*#__PURE__*/_react["default"].createElement(StyledLink, {
      to: link,
      isCompact: compact
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon,
      size: "2x"
    }), /*#__PURE__*/_react["default"].createElement("p", null, label)));
  }));
};

var _default = Sidebar;
exports["default"] = _default;