/**
 * Created by Hutber on 10/12/2014.
 */
'use strict';

//require('./templates');
require('./core');
require('./router');
MT.gbl = require('./globals');

/*==================================================
 Views
 ================================================== */
var currentViews = [];
currentViews.push(
	{
		name: 'index',
		path: require('./views/indexView'),
		url: 'index'
	},
	{
		name: 'signup',
		path: require('./views/signupView'),
		url: 'signup'
	}
);

//set up the global view for all menu items etc
MT.gbl.gv = new MT.gbl.gv();
MT.gbl.gv.render();

//set up all other views
currentViews.forEach(function(me){
	var BackboneView = me.path;
	MT.gbl.views[me.name] = new BackboneView();

	//Set up staff views
	MT.ROUTER.on('route:'+me.url, function(param){
		MT.gbl.views[me.name].render(param);
	});
});

$(document).ready(function() {
	Backbone.history.handlers.push({
		route: /(.*)/, callback: function (fragment) {
			// problems with `fragment` handled here
		}
	});
	Backbone.history.start();
});
