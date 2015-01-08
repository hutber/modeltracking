'use strict';
//routes from the home page
var Router = Backbone.Router.extend({
    routes: {
	    // #Home ---------------------------------------------------- /
        '': 'index',

        //User Parts
		'signup': 'signup',

    }
});
//Set up Routes for backbone.
MT.ROUTER = new Router();