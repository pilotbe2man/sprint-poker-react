'use strict';
var webpack = require('webpack');

module.exports = {
  entry: './app/coffee/app.coffee',
  output: {
    filename: 'main.js',
    path: './dist/'
  },
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee'],
    modulesDirectories: [
      './node_modules'
    ],
  },
  debug: true,
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: '/200.html'
    },
  },
  module: {
    loaders: [
      { test: /\.js$/,                         loader: 'babel-loader?stage=0', exclude: /(node_modules)/ },
      { test: /\.(cjsx|coffee)$/,              loader: "coffee-jsx-loader" },
      { test: /\.(png|jpg)$/,                  loader: 'url-loader?prefix=assets/' },
      { test: /\.sass/,                        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax' },
      { test: /\.css$/,                        loader: 'style-loader!css-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
};
