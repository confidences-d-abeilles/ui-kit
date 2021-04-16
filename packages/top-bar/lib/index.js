"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styled["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n  color: white;\n  background-color: black;\n"])));

exports["default"] = _default;