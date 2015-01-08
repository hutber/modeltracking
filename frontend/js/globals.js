/**
 * Created by Hutber on 10/12/2014.
 */
'use strict';
module.exports =  function() {
	var globals = {};

	globals.views = [];

	globals.gv = Backbone.View.extend({
		el: 'body',
		events: {
			//'click a': 'navigate'
		},
		navigate: function(ev){
			//ev.preventDefault()
			//var ev = $(ev.currentTarget);
			//MT.ROUTER.navigate(ev[0].pathname, true);
		},
		render: function(){
			this.$el.html('<div class="shell"></div>');
		}
	});

	return globals;
}();