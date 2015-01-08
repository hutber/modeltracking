'user strict';

//extend the view with the default home view
module.exports = MT.gbl.gv.extend({
	el: '.shell',
	templates: {
		home: require('../../views/home.jade'),
	},
	events: {
	},
	render: function () {
		//load data in ejs
		this.$el.html(this.templates.home());
	}
});