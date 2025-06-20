import React from 'react';
import { titleExecute } from "../commands/title.js";
import { jsx as _jsx } from "react/jsx-runtime";
export var title1 = {
  name: 'title1',
  keyCommand: 'title1',
  shortcuts: 'ctrlcmd+1',
  prefix: '# ',
  suffix: '',
  buttonProps: {
    'aria-label': 'Insert title1 (ctrl + 1)',
    title: 'Insert title1 (ctrl + 1)'
  },
  icon: /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: 18,
      textAlign: 'left'
    },
    children: "Title 1"
  }),
  execute: (state, api) => {
    titleExecute({
      state,
      api,
      prefix: state.command.prefix,
      suffix: state.command.suffix
    });
  }
};