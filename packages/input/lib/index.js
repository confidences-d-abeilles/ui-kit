"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = (0, _styled["default"])('input')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &[type=\"text\"], &[type=\"email\"], &[type=\"password\"], &[type=\"tel\"], &[type=\"number\"] {\n    width: calc(100% - 2rem);\n    padding: 0.25rem 0.5rem;\n    margin: 0.5rem;\n    border-style: solid;\n    border-color: ", ";\n    border-width: 0 0 1px 0;\n    background: none;\n    &:focus {\n      margin-bottom: calc(0.5rem - 1px);\n      border-width: 0 0 2px 0;\n    }\n    font-size: 1rem;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.black;
});
var _default = StyledInput;
exports["default"] = _default;