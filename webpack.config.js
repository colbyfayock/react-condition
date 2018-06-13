const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    'index': './src/index.js',
    'demo': './src/demo.js',
  },

  output: {
    filename: '[name].js',
    library: 'reactCondition',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
      filename: "./index.html",
      chunks: ['demo']
    })
  ]

};