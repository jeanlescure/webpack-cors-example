var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['whatwg-fetch', './src/app.js']
  },
  output: {
    path: __dirname + '/bundle',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'] 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};