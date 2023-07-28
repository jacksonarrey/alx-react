<<<<<<< HEAD
t path = require('path');

module.exports = {
	  mode: 'production',
	  entry: './js/dashboard_main.js',
	  output: {
		      path: path.resolve(__dirname, 'public'),
		      filename: 'bundle.js',
		    },
=======
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
>>>>>>> 519068f69f8492616c918f9a7a8de3c6519b0a78
};
