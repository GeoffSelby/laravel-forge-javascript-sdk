/* global __dirname, require, module */

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const libraryName = 'forge-sdk';

let outputDir;
let outputFile;
let mode;

if (env === 'build') {
  mode = 'production';
  outputDir = path.join(__dirname, 'lib');
  outputFile = `${libraryName}.min.js`;
} else {
  mode = 'development';
  outputDir = __dirname;
  outputFile = 'index.js';
}

const config = {
  mode,
  entry: path.join(__dirname, 'src/Forge.js'),
  devtool: 'inline-source-map',
  output: {
    path: outputDir,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
