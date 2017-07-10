/**
 * Created by Kimmo on 10/07/2017.
 */

module.exports = {

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
