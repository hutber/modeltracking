/** Created by Hutber on 10/12/2014.  */
//Locally required files
window.$ = require('jquery');
window.Backbone = require('backbone');
Backbone.$ = $;
window._ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string'); // => true
window.moment = require('moment');

//Define MT
window.MT = {}; //define MT so we can use it globally

/*==================================================
 Is Mobile - If true then we are a mobile
 ================================================== */
MT.isMobile = true;
if (document.URL.indexOf("www") === 0 || document.URL.indexOf("") !== false) {
	MT.isMobile = false;
}

//# Debug on the page ----------------------------------------------------
function debug (msg) {
	var me = document.getElementsByTagName('debug'),
		myself = me[0].firstElementChild.inMTnerHTML;
	me[0].firstElementChild.innerHTML = myself+'<li>'+ msg +'</li>';
}

/*==================================================
 Bind C to be alert on mobile console.log in desktop
 ================================================== */
window.c = false;
if (typeof console === "object" && typeof console.error === "function" && !MT.isMobile) {
	c = function (msg) {
		console.info(msg);
		//console.info(arguments.callee.caller.toString());
	};
} else {
	c = function (msg) {
		debug(msg);
	};
}

/*==================================================
 Error handling on mobile
 ================================================== */
//#alert errors ----------------------------------------------------
if (MT.isMobile){
	window.onerror = function (msg, url, linenumber) {
		c('Type: '+typeof msg +'\nError message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
		return true;
	};
}

//Add function to turn form elements into object
$.fn.serializeObject = function () {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function () {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};