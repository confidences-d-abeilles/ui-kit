"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Button = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotionTheming = require("emotion-theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0.5rem 1rem;\n  display: inline-block;\n  padding: 0.5rem 1.5rem;\n  border: none;\n  border-radius: 2rem;\n  transition: all 0.125s;\n  cursor: pointer;\n  text-align: center;\n  font-size: 1rem;\n  box-shadow: ", ";\n\n  &:hover, &:focus, &:active {\n    text-decoration: none;\n    outline: none;\n    box-shadow: 2px 2px 5px silver;\n  }\n  \n  color: ", ";\n  background-color: ", ";\n\n  &:hover, &:focus, &:active {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _emotionTheming.withTheme)((0, _styled["default"])('button')(_templateObject(), function (_ref) {
  var flat = _ref.flat;
  return flat ? 'none' : '5px 5px 10px silver';
}, function (_ref2) {
  var primary = _ref2.primary,
      theme = _ref2.theme;
  return primary ? theme.colors.white : theme.colors.black;
}, function (_ref3) {
  var theme = _ref3.theme,
      primary = _ref3.primary;
  return primary ? theme.colors.primary : theme.colors.white;
}, function (_ref4) {
  var primary = _ref4.primary,
      theme = _ref4.theme;
  return primary ? theme.colors.white : theme.colors.white;
}, function (_ref5) {
  var primary = _ref5.primary,
      theme = _ref5.theme;
  return primary ? theme.colors.primary : theme.colors.primary;
}));
exports.Button = Button;
var _default = Button;
exports["default"] = _default;
Button.propTypes = {
  primary: _propTypes["default"].bool
};
Button.defaultProps = {
  primary: false
};