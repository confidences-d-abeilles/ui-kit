"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotionTheming = require("emotion-theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0.125rem 0.5rem;\n  display: inline-block;\n  padding: 0.25rem 1rem;\n  border: ", ";\n  transition: all 0.125s;\n  cursor: pointer;\n  text-align: center;\n\n  &:hover, &:focus, &:active {\n    text-decoration: none;\n    outline: none;\n  }\n  \n  color: ", ";\n  background-color: ", ";\n\n  &:hover, &:focus, &:active {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _emotionTheming.withTheme)((0, _styled["default"])('button')(_templateObject(), function (_ref) {
  var primary = _ref.primary,
      theme = _ref.theme;
  return primary ? 'none' : "solid 1px ".concat(theme.colors.primary);
}, function (_ref2) {
  var primary = _ref2.primary,
      theme = _ref2.theme;
  return primary ? theme.colors.white : theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme,
      primary = _ref3.primary;
  return primary ? theme.colors.black : 'transparent';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}));
exports.Button = Button;
Button.propTypes = {
  primary: _propTypes["default"].bool
};
Button.defaultProps = {
  primary: false
};