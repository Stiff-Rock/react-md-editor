"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Textarea;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _Context = require("../../Context");
var _commands = require("../../commands/");
var _handleKeyDown = _interopRequireDefault(require("./handleKeyDown"));
var _shortcuts = _interopRequireDefault(require("./shortcuts"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["prefixCls", "onChange"],
  _excluded2 = ["markdown", "commands", "fullscreen", "preview", "highlightEnable", "extraCommands", "tabSize", "defaultTabEnable", "autoFocusEnd", "textareaWarp", "dispatch"];
function Textarea(props) {
  var prefixCls = props.prefixCls,
    _onChange = props.onChange,
    other = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useContext = (0, _react.useContext)(_Context.EditorContext),
    markdown = _useContext.markdown,
    commands = _useContext.commands,
    fullscreen = _useContext.fullscreen,
    preview = _useContext.preview,
    highlightEnable = _useContext.highlightEnable,
    extraCommands = _useContext.extraCommands,
    tabSize = _useContext.tabSize,
    defaultTabEnable = _useContext.defaultTabEnable,
    autoFocusEnd = _useContext.autoFocusEnd,
    textareaWarp = _useContext.textareaWarp,
    dispatch = _useContext.dispatch,
    otherStore = (0, _objectWithoutProperties2["default"])(_useContext, _excluded2);
  var textRef = _react["default"].useRef(null);
  var executeRef = _react["default"].useRef();
  var statesRef = _react["default"].useRef({
    fullscreen: fullscreen,
    preview: preview
  });
  (0, _react.useEffect)(function () {
    statesRef.current = {
      fullscreen: fullscreen,
      preview: preview,
      highlightEnable: highlightEnable
    };
  }, [fullscreen, preview, highlightEnable]);
  (0, _react.useEffect)(function () {
    if (textRef.current && dispatch) {
      var commandOrchestrator = new _commands.TextAreaCommandOrchestrator(textRef.current);
      executeRef.current = commandOrchestrator;
      dispatch({
        textarea: textRef.current,
        commandOrchestrator: commandOrchestrator
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _react.useEffect)(function () {
    if (autoFocusEnd && textRef.current && textareaWarp) {
      textRef.current.focus();
      var length = textRef.current.value.length;
      textRef.current.setSelectionRange(length, length);
      setTimeout(function () {
        if (textareaWarp) {
          textareaWarp.scrollTop = textareaWarp.scrollHeight;
        }
        if (textRef.current) {
          textRef.current.scrollTop = textRef.current.scrollHeight;
        }
      }, 0);
    }
  }, [textareaWarp]);
  var onKeyDown = function onKeyDown(e) {
    (0, _handleKeyDown["default"])(e, tabSize, defaultTabEnable);
    (0, _shortcuts["default"])(e, [].concat((0, _toConsumableArray2["default"])(commands || []), (0, _toConsumableArray2["default"])(extraCommands || [])), executeRef.current, dispatch, statesRef.current);
  };
  (0, _react.useEffect)(function () {
    if (textRef.current) {
      textRef.current.addEventListener('keydown', onKeyDown);
    }
    return function () {
      if (textRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        textRef.current.removeEventListener('keydown', onKeyDown);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: false
  }, other), {}, {
    ref: textRef,
    className: "".concat(prefixCls, "-text-input ").concat(other.className ? other.className : ''),
    value: markdown,
    onChange: function onChange(e) {
      dispatch && dispatch({
        markdown: e.target.value
      });
      _onChange && _onChange(e);
    }
  }));
}
module.exports = exports.default;