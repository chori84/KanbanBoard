module.exports = {
  entry: [
    './source/App.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    contentBase: './public',
    colors: true,
    port: 8088,
    historyApiFallback: true,
    inline: true
  }
}