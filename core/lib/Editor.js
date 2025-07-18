"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _reactMarkdownPreview = _interopRequireDefault(require("@uiw/react-markdown-preview"));
var _Toolbar = require("./components/Toolbar/");
var _TextArea = _interopRequireDefault(require("./components/TextArea/"));
var _DragBar = _interopRequireDefault(require("./components/DragBar/"));
var _commands = require("./commands/");
var _Context = require("./Context");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["prefixCls", "className", "value", "commands", "commandsFilter", "direction", "extraCommands", "height", "enableScroll", "visibleDragbar", "highlightEnable", "preview", "fullscreen", "overflow", "previewOptions", "textareaProps", "maxHeight", "minHeight", "autoFocus", "autoFocusEnd", "tabSize", "defaultTabEnable", "onChange", "onStatistics", "onHeightChange", "hideToolbar", "toolbarBottom", "components", "renderTextarea"];
function setGroupPopFalse() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.keys(data).forEach(function (keyname) {
    data[keyname] = false;
  });
  return data;
}
var InternalMDEditor = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _ref = props || {},
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'w-md-editor' : _ref$prefixCls,
    className = _ref.className,
    propsValue = _ref.value,
    _ref$commands = _ref.commands,
    commands = _ref$commands === void 0 ? (0, _commands.getCommands)() : _ref$commands,
    commandsFilter = _ref.commandsFilter,
    direction = _ref.direction,
    _ref$extraCommands = _ref.extraCommands,
    extraCommands = _ref$extraCommands === void 0 ? (0, _commands.getExtraCommands)() : _ref$extraCommands,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 200 : _ref$height,
    _ref$enableScroll = _ref.enableScroll,
    enableScroll = _ref$enableScroll === void 0 ? true : _ref$enableScroll,
    _ref$visibleDragbar = _ref.visibleDragbar,
    visibleDragbar = _ref$visibleDragbar === void 0 ? typeof props.visiableDragbar === 'boolean' ? props.visiableDragbar : true : _ref$visibleDragbar,
    _ref$highlightEnable = _ref.highlightEnable,
    highlightEnable = _ref$highlightEnable === void 0 ? true : _ref$highlightEnable,
    _ref$preview = _ref.preview,
    previewType = _ref$preview === void 0 ? 'live' : _ref$preview,
    _ref$fullscreen = _ref.fullscreen,
    fullscreen = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
    _ref$overflow = _ref.overflow,
    overflow = _ref$overflow === void 0 ? true : _ref$overflow,
    _ref$previewOptions = _ref.previewOptions,
    previewOptions = _ref$previewOptions === void 0 ? {} : _ref$previewOptions,
    textareaProps = _ref.textareaProps,
    _ref$maxHeight = _ref.maxHeight,
    maxHeight = _ref$maxHeight === void 0 ? 1200 : _ref$maxHeight,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 100 : _ref$minHeight,
    autoFocus = _ref.autoFocus,
    _ref$autoFocusEnd = _ref.autoFocusEnd,
    autoFocusEnd = _ref$autoFocusEnd === void 0 ? false : _ref$autoFocusEnd,
    _ref$tabSize = _ref.tabSize,
    tabSize = _ref$tabSize === void 0 ? 2 : _ref$tabSize,
    _ref$defaultTabEnable = _ref.defaultTabEnable,
    defaultTabEnable = _ref$defaultTabEnable === void 0 ? false : _ref$defaultTabEnable,
    onChange = _ref.onChange,
    onStatistics = _ref.onStatistics,
    onHeightChange = _ref.onHeightChange,
    hideToolbar = _ref.hideToolbar,
    _ref$toolbarBottom = _ref.toolbarBottom,
    toolbarBottom = _ref$toolbarBottom === void 0 ? false : _ref$toolbarBottom,
    components = _ref.components,
    renderTextarea = _ref.renderTextarea,
    other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var cmds = commands.map(function (item) {
    return commandsFilter ? commandsFilter(item, false) : item;
  }).filter(Boolean);
  var extraCmds = extraCommands.map(function (item) {
    return commandsFilter ? commandsFilter(item, true) : item;
  }).filter(Boolean);
  var _useReducer = (0, _react.useReducer)(_Context.reducer, {
      markdown: propsValue,
      preview: previewType,
      components: components,
      height: height,
      minHeight: minHeight,
      highlightEnable: highlightEnable,
      tabSize: tabSize,
      defaultTabEnable: defaultTabEnable,
      scrollTop: 0,
      scrollTopPreview: 0,
      commands: cmds,
      extraCommands: extraCmds,
      fullscreen: fullscreen,
      barPopup: {}
    }),
    _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var container = (0, _react.useRef)(null);
  var previewRef = (0, _react.useRef)(null);
  var enableScrollRef = (0, _react.useRef)(enableScroll);
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
      container: container.current,
      dispatch: dispatch
    });
  });
  (0, _react.useMemo)(function () {
    return enableScrollRef.current = enableScroll;
  }, [enableScroll]);
  (0, _react.useEffect)(function () {
    var stateInit = {};
    if (container.current) {
      stateInit.container = container.current || undefined;
    }
    stateInit.markdown = propsValue || '';
    stateInit.barPopup = {};
    if (dispatch) {
      dispatch((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), stateInit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var cls = [className, 'wmde-markdown-var', direction ? "".concat(prefixCls, "-").concat(direction) : null, prefixCls, state.preview ? "".concat(prefixCls, "-show-").concat(state.preview) : null, state.fullscreen ? "".concat(prefixCls, "-fullscreen") : null].filter(Boolean).join(' ').trim();
  (0, _react.useMemo)(function () {
    return propsValue !== state.markdown && dispatch({
      markdown: propsValue || ''
    });
  }, [propsValue, state.markdown]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useMemo)(function () {
    return previewType !== state.preview && dispatch({
      preview: previewType
    });
  }, [previewType]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useMemo)(function () {
    return tabSize !== state.tabSize && dispatch({
      tabSize: tabSize
    });
  }, [tabSize]);
  (0, _react.useMemo)(function () {
    return highlightEnable !== state.highlightEnable && dispatch({
      highlightEnable: highlightEnable
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [highlightEnable]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useMemo)(function () {
    return autoFocus !== state.autoFocus && dispatch({
      autoFocus: autoFocus
    });
  }, [autoFocus]);
  (0, _react.useMemo)(function () {
    return autoFocusEnd !== state.autoFocusEnd && dispatch({
      autoFocusEnd: autoFocusEnd
    });
  }, [autoFocusEnd]);
  (0, _react.useMemo)(function () {
    return fullscreen !== state.fullscreen && dispatch({
      fullscreen: fullscreen
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [fullscreen]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useMemo)(function () {
    return height !== state.height && dispatch({
      height: height
    });
  }, [height]);
  (0, _react.useMemo)(function () {
    return height !== state.height && onHeightChange && onHeightChange(state.height, height, state);
  }, [height, onHeightChange, state]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useMemo)(function () {
    return commands !== state.commands && dispatch({
      commands: cmds
    });
  }, [props.commands]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _react.useMemo)(function () {
    return extraCommands !== state.extraCommands && dispatch({
      extraCommands: extraCmds
    });
  }, [props.extraCommands]);
  var textareaDomRef = (0, _react.useRef)();
  var active = (0, _react.useRef)('preview');
  var initScroll = (0, _react.useRef)(false);
  (0, _react.useMemo)(function () {
    textareaDomRef.current = state.textareaWarp;
    if (state.textareaWarp) {
      state.textareaWarp.addEventListener('mouseover', function () {
        active.current = 'text';
      });
      state.textareaWarp.addEventListener('mouseleave', function () {
        active.current = 'preview';
      });
    }
  }, [state.textareaWarp]);
  var handleScroll = function handleScroll(e, type) {
    if (!enableScrollRef.current) return;
    var textareaDom = textareaDomRef.current;
    var previewDom = previewRef.current ? previewRef.current : undefined;
    if (!initScroll.current) {
      active.current = type;
      initScroll.current = true;
    }
    if (textareaDom && previewDom) {
      var scale = (textareaDom.scrollHeight - textareaDom.offsetHeight) / (previewDom.scrollHeight - previewDom.offsetHeight);
      if (e.target === textareaDom && active.current === 'text') {
        previewDom.scrollTop = textareaDom.scrollTop / scale;
      }
      if (e.target === previewDom && active.current === 'preview') {
        textareaDom.scrollTop = previewDom.scrollTop * scale;
      }
      var scrollTop = 0;
      if (active.current === 'text') {
        scrollTop = textareaDom.scrollTop || 0;
      } else if (active.current === 'preview') {
        scrollTop = previewDom.scrollTop || 0;
      }
      dispatch({
        scrollTop: scrollTop
      });
    }
  };
  var previewClassName = "".concat(prefixCls, "-preview ").concat(previewOptions.className || '');
  var handlePreviewScroll = function handlePreviewScroll(e) {
    return handleScroll(e, 'preview');
  };
  var mdPreview = (0, _react.useMemo)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: previewRef,
      className: previewClassName,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMarkdownPreview["default"], (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, previewOptions), {}, {
        onScroll: handlePreviewScroll,
        source: state.markdown || ''
      }))
    });
  }, [previewClassName, previewOptions, state.markdown]);
  var preview = (components === null || components === void 0 ? void 0 : components.preview) && (components === null || components === void 0 ? void 0 : components.preview(state.markdown || '', state, dispatch));
  if (preview && /*#__PURE__*/_react["default"].isValidElement(preview)) {
    mdPreview = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: previewClassName,
      ref: previewRef,
      onScroll: handlePreviewScroll,
      children: preview
    });
  }
  var containerStyle = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, other.style), {}, {
    height: state.height || '100%'
  });
  var containerClick = function containerClick() {
    return dispatch({
      barPopup: (0, _objectSpread2["default"])({}, setGroupPopFalse(state.barPopup))
    });
  };
  var dragBarChange = function dragBarChange(newHeight) {
    return dispatch({
      height: newHeight
    });
  };
  var changeHandle = function changeHandle(evn) {
    onChange && onChange(evn.target.value, evn, state);
    if (textareaProps && textareaProps.onChange) {
      textareaProps.onChange(evn);
    }
    if (state.textarea && state.textarea instanceof HTMLTextAreaElement && onStatistics) {
      var obj = new _commands.TextAreaCommandOrchestrator(state.textarea);
      var objState = obj.getState() || {};
      onStatistics((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, objState), {}, {
        lineCount: evn.target.value.split('\n').length,
        length: evn.target.value.length
      }));
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Context.EditorContext.Provider, {
    value: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
      dispatch: dispatch
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
      ref: container,
      className: cls
    }, other), {}, {
      onClick: containerClick,
      style: containerStyle,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar.ToolbarVisibility, {
        hideToolbar: hideToolbar,
        toolbarBottom: toolbarBottom,
        prefixCls: prefixCls,
        overflow: overflow,
        placement: "top"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(prefixCls, "-content"),
        children: [/(edit|live)/.test(state.preview || '') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea["default"], (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
          className: "".concat(prefixCls, "-input"),
          prefixCls: prefixCls,
          autoFocus: autoFocus
        }, textareaProps), {}, {
          onChange: changeHandle,
          renderTextarea: (components === null || components === void 0 ? void 0 : components.textarea) || renderTextarea,
          onScroll: function onScroll(e) {
            return handleScroll(e, 'text');
          }
        })), /(live|preview)/.test(state.preview || '') && mdPreview]
      }), visibleDragbar && !state.fullscreen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DragBar["default"], {
        prefixCls: prefixCls,
        height: state.height,
        maxHeight: maxHeight,
        minHeight: minHeight,
        onChange: dragBarChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar.ToolbarVisibility, {
        hideToolbar: hideToolbar,
        toolbarBottom: toolbarBottom,
        prefixCls: prefixCls,
        overflow: overflow,
        placement: "bottom"
      })]
    }))
  });
});
var Editor = InternalMDEditor;
Editor.Markdown = _reactMarkdownPreview["default"];
var _default = exports["default"] = Editor;
module.exports = exports.default;