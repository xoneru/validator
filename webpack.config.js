const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = { // задает путь куда будет сохраняться код
  output: {
    path: path.resolve(__dirname, 'dist'), // создает папку или указывает на существующую
    filename: 'app.bundle.js', // создает файл js
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  entry: './src/index.js',
};