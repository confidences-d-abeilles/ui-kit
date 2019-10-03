"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rows = exports.Columns = exports.Item = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-wrap: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 25rem;\n  flex-direction: column;\n  justify-content: ", ";\n  align-items: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  flex: ", ";\n  align-self: ", ";\n  text-align: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styled["default"].div(_templateObject(), function (_ref) {
  var gutters = _ref.gutters;
  return gutters ? '1rem 5rem' : 0;
}, function (_ref2) {
  var flex = _ref2.flex;
  return flex;
}, function (_ref3) {
  var alignSelf = _ref3.alignSelf;
  return alignSelf || 'initial';
}, function (_ref4) {
  var textAlign = _ref4.textAlign;
  return textAlign;
});

exports.Item = Item;

var Columns = _styled["default"].div(_templateObject2(), function (_ref5) {
  var justifyContent = _ref5.justifyContent;
  return justifyContent || 'initial';
}, function (_ref6) {
  var alignItems = _ref6.alignItems;
  return alignItems || 'initial';
});

exports.Columns = Columns;

var Rows = _styled["default"].div(_templateObject3(), function (_ref7) {
  var justifyContent = _ref7.justifyContent;
  return justifyContent || 'initial';
}, function (_ref8) {
  var alignItems = _ref8.alignItems;
  return alignItems || 'initial';
}, function (_ref9) {
  var wrap = _ref9.wrap;
  return wrap;
});

exports.Rows = Rows;