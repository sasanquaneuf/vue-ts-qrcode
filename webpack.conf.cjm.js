const webpack = require("webpack");

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/library-main.ts',
  output: {
    filename: './vue-ts-qrcode.cjm.js',
    libraryTarget:'commonjs-module'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.vue']
  },
  module: {
    rules: [
      {
         test: /\.ts$/,
         exclude: /node_modules/,
         loader: 'ts-loader',
         options: {
          appendTsSuffixTo: [/\.vue$/]
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      }
   ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

