const path = require('path');
module.exports = {
	entry: './dist/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
};
