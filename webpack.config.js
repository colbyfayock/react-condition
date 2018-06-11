const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    'index': './src/index.js',
    'condition': './src/condition.js',
  },

  output: {
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]

};