import React from 'react';
import { getBreaksNeededForEmptyLineBefore, getBreaksNeededForEmptyLineAfter, selectWord, insertBeforeEachLine } from "../utils/markdownUtils.js";
import { jsx as _jsx } from "react/jsx-runtime";
export var quote = {
  name: 'quote',
  keyCommand: 'quote',
  shortcuts: 'ctrlcmd+q',
  prefix: '> ',
  buttonProps: {
    'aria-label': 'Insert a quote (ctrl + q)',
    title: 'Insert a quote (ctrl + q)'
  },
  icon: /*#__PURE__*/_jsx("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 520 520",
    children: /*#__PURE__*/_jsx("path", {
      fill: "currentColor",
      d: "M520,95.75 L520,225.75 C520,364.908906 457.127578,437.050625 325.040469,472.443125 C309.577578,476.586875 294.396016,464.889922 294.396016,448.881641 L294.396016,414.457031 C294.396016,404.242891 300.721328,395.025078 310.328125,391.554687 C377.356328,367.342187 414.375,349.711094 414.375,274.5 L341.25,274.5 C314.325781,274.5 292.5,252.674219 292.5,225.75 L292.5,95.75 C292.5,68.8257812 314.325781,47 341.25,47 L471.25,47 C498.174219,47 520,68.8257812 520,95.75 Z M178.75,47 L48.75,47 C21.8257813,47 0,68.8257812 0,95.75 L0,225.75 C0,252.674219 21.8257813,274.5 48.75,274.5 L121.875,274.5 C121.875,349.711094 84.8563281,367.342187 17.828125,391.554687 C8.22132813,395.025078 1.89601563,404.242891 1.89601563,414.457031 L1.89601563,448.881641 C1.89601563,464.889922 17.0775781,476.586875 32.5404687,472.443125 C164.627578,437.050625 227.5,364.908906 227.5,225.75 L227.5,95.75 C227.5,68.8257812 205.674219,47 178.75,47 Z"
    })
  }),
  execute: (state, api) => {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
    var breaksBefore = Array(breaksBeforeCount + 1).join('\n');
    var breaksAfterCount = getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
    var breaksAfter = Array(breaksAfterCount + 1).join('\n');
    var modifiedText = insertBeforeEachLine(state1.selectedText, state.command.prefix);
    api.replaceSelection("" + breaksBefore + modifiedText.modifiedText + breaksAfter);
    var selectionStart = state1.selection.start + breaksBeforeCount;
    var selectionEnd = selectionStart + modifiedText.modifiedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd
    });
  }
};