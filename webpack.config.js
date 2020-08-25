const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const scripts = path.resolve(__dirname, 'src');

const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [scripts],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [scripts],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      favicon: './src/assets/favicon.ico',
    }),
    new UglifyJSPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

module.exports = webpackConfig;
