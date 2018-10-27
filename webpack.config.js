const path = require('path');
var buildPath = 'WebContent/public/scripts';
module.exports = {
  entry: './srcjsx/app.js',
  output: {
    path: path.join(__dirname, buildPath),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, buildPath)
  }
};
