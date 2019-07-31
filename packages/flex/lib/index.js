"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rows = exports.Columns = exports.Item = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: rows;\n  flex-wrap: wrap;\n  justify-content: ", ";\n  align-items: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 25rem;\n  flex-direction: columns;\n  justify-content: center;\n  align-items: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  flex: ", " ;\n  align-self: ", ";\n  text-align: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styled["default"].div(_templateObject(), function (_ref) {
  var noGutter = _ref.noGutter;
  return noGutter ? 0 : '1rem 5rem';
}, function (_ref2) {
  var flex = _ref2.flex;
  return flex || '1 25rem';
}, function (_ref3) {
  var alignSelf = _ref3.alignSelf;
  return alignSelf || 'center';
}, function (_ref4) {
  var textAlign = _ref4.textAlign;
  return textAlign;
});

exports.Item = Item;

var Columns = _styled["default"].div(_templateObject2(), function (_ref5) {
  var alignItems = _ref5.alignItems;
  return alignItems || 'center';
});

exports.Columns = Columns;

var Rows = _styled["default"].div(_templateObject3(), function (_ref6) {
  var justifyContent = _ref6.justifyContent;
  return justifyContent || 'initial';
}, function (_ref7) {
  var alignItems = _ref7.alignItems;
  return alignItems || 'center';
});

exports.Rows = Rows;