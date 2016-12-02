// We require the `index.html` file here so that
// WebPack packages it within the `PROD` bundle
require('file?name=[name].[ext]!../index.html');

import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello-world';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);