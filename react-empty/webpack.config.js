const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    publicPath: "/dist/",
    filename: 'js/app.js'
  },
  module: {
      rules: [
        //jsx文件处理
        {
          test: /\.jsx$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        },
        // css文件处理
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader" 
        })
        },
        // scss文件处理
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        },
        // 图片的处理
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: "resource/[name].[ext]"
                }
              }
            ]
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
             use: [
             {
               loader: 'file-loader' ,
                options: {
                  limit: 8192,
                  name: "resource/[name].[ext]"
                }
             }]
       }

  ]},
  plugins: [
    // 处理html文件
    new HtmlWebpackPlugin({
        template:"./src/index.html"
    }),
    // 打包css文件
    new ExtractTextPlugin("css/[name].css"),
    // 打包公共模块
    new webpack.optimize.CommonsChunkPlugin({
        name: "common",
        filename: "js/base.js"
    })
  ],
  devServer: {
   }
};