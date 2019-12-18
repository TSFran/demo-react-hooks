const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, './client');

const publicPath = '/';

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': path.join(rootPath, 'src/index.tsx')
  },
  output: {
    path: path.join(rootPath, 'dist'),
    publicPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': rootPath
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UND | React Hooks',
      hash: true,
      template: path.join(rootPath, 'public/index.html')
    })
  ]
}