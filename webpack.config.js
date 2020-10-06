const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'assets')
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}
