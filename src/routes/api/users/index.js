module.exports = function(app) {
	var mongoose = require('mongoose');
/* #Users --------------------------------------------------------- */
	var url = '/api/users/';
	/* # Grab Users --------------------------------------------------------- */
	app.get(url, function (req, res) {
		mongoose.model('users').find(function (err, users) {
			res.send(users);
		});
	});
}