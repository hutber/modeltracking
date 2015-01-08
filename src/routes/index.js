module.exports = function(app, passport, auth) {

	// Include the controllers
	var index = require('../controllers/index')

	//add access to app
	app.get('/app/wwwbuil', function(req, res){
		res.sendFile('index.html');
	});

	// GET home page
	app.get('/', index.home);

	app.get("/add", function (req, res, next) {
		var model = {
			name: "",
			army: ""
		};

		res.render("add", {title: "Add a model", model: model});
	});


	app.post("/add", function (req, res, next) {
		var model = {
			name: req.body.name,
			army: req.body.army
		};

		var saved = false, validated = false;

		// TODO: Validate the model

		// TODO: Save the model

		if (saved && validated) {
			// Redirect to page viewing the new model
			res.redirect("/model/" + model.id); // id from db etc
		} else {
			// Render the page again with data & errors
			res.render("add", {title: "Add a model", model: model, errors: []});
		}
	});
};
