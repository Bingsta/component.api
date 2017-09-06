const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: "[name].[contentHash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './app/main.ts',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
		modulesDirectories: [
			'node_modules',
			'app'
		],
		root: path.join(__dirname, 'app'),
		alias: {
			durandal: 'durandal/js',
			plugins: 'durandal/js/plugins',
      transitions: 'durandal/js/transitions'
		}
  },


  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
    rules: [{
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }],
        //use style-loader in development
        fallback: "style-loader"
      })
    }]
  },


  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },


	externals: {
		jquery: 'jQuery'
	},


  plugins: [
    extractLess
  ]

}