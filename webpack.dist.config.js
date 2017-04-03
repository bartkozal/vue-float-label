var path = require('path')

module.exports = {
  entry: './vue-float-label.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'vue-float-label.js',
    library: 'vueFloatLabel',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
