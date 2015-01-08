module.exports = {

	//Home Page
	home: function (req, res) {
		res.render('index', {
			user: req.user,
			title: 'Home Page'
		});
	}
};
