// External libraries
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var express = require('express');

// Local files
var config = require('./webpack.config.js');
var api = require('./api/api');

if (process.env.NODE_ENV === 'dev-server') {
  // = DEV =
  // This stands up the webpack-dev-server
  // with Hot Module Reloading enabled.

  // The following is needed in order for
  // Hot Module Reloading to work.
  config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');

  // #########################################
  // ############## IMPORTANT ################
  // Here we are injecting the API_URL env var
  // to be used by the `HelloWorld` component
  config.plugins.unshift(new webpack.DefinePlugin({
    'process.env':{
      'API_URL': JSON.stringify('http://localhost:8081')
    }
  }));
  // ############## /IMPORTANT ###############
  // #########################################

  // Initiate webpack-dev-server with the
  // config we created in `webpack.config.js`
  var compiler = webpack(config);
  var server = new webpackDevServer(compiler, {
    hot: true
  });

  server.listen(8080);
} else if (process.env.NODE_ENV === 'dev-api') {
  // = DEV =
  // This stands up the express.js API
  var app = express();

  // We define the API routes here
  api.defineApi(app);

  app.listen(8081, function () {
    console.log('API is up!')
  });
} else {
  // = PROD =
  // This is here for simplicity's sake,
  // in a real-world application none of
  // the development code should be copied
  // over to the production server.
  var app = express();

  // We serve the bundle folder, which
  // should contain an `index.html` and
  // a `bundle.js` file only.
  app.use('/', express.static('bundle'));

  // We define the API routes here
  api.defineApi(app);

  app.listen(8080, function () {
    console.log('Both front-end and API are up!')
  });
}