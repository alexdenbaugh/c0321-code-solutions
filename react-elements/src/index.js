import React from 'react';
import ReactDOM from 'react-dom';

const $h1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const $div = document.querySelector('#root');
ReactDOM.render($h1, $div);
