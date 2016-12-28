var path = require( 'path' );

var BUILD_DIR = path.resolve( __dirname, 'dist' );
var APP_DIR = path.resolve( __dirname, 'src' );

module.exports = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			include: path.resolve( __dirname, 'src' ),
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
				presets: ['es2015']
			}
		}]
	}
};
