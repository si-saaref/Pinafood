const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		hot: false,
		liveReload: false,
		open: true,
		port: 9898,
		client: {
			overlay: {
				errors: true,
				warnings: true,
			},
		},
		compress: true,
	},
	plugins: [new CleanWebpackPlugin()],
});
