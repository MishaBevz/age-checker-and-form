const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
              test: /\.scss$/,
              use: [
                  // fallback to style-loader in development
                  process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
              ]
          },
          {
              test: /\.(pug|jade)$/, 
              loader: 'pug-loader'
          },
          {
            test: /\.(ttf|woff|eot|otf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[folder]/[name].[ext]',
                }
              }
            ]
          },
          {
            test: /\.(png|jpg|svg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[folder]/[name].[ext]'
                }
              }
            ]
          },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './app/index.pug',
          inject: false
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };