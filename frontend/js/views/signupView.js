'user strict';

//extend the view with the default home view
module.exports = MT.gbl.gv.extend({
	el: '.shell',
	templates: {
		home: require('../../views/signup.jade'),
	},
	events: {
	},
	render: function () {
		//load data in ejs
		c(this.templates.home());
		this.$el.html(this.templates.home());
	}
});