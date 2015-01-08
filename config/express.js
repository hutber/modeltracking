var express = require('express'),
	session = require('express-session'),
	mongoStore = require('connect-mongo')(session)
	flash = require('connect-flash'),
	helpers = require('view-helpers'),
	bodyParser = require('body-parser'),
	compression = require('compression'),
	methodOverride = require('method-override'),
	logger = require('morgan'),
	fs = require('fs'),
	moment = require('moment'),
	cookieParser = require('cookie-parser'),
	pkg = require('../package.json');
/*
 ==================================================
 Table of Contents
 ==================================================
 #Requires
 #Initiate express
 #Views
 #Moment
 #Logger
 #Mongo
 #Routes
 #Express Use
 #Express Static
 #Export Module
 */

module.exports = function (app, config, passport) {

	app.set('showStackError', true);

	/* #Express Use ------------------------------------------------- */
	app.use(compression());
	app.use(session(
		{
			secret: 'mayfield',
			saveUninitialized: true,
			resave: true,
			store: new mongoStore({
				db : app.locals.db.db //referenced from db.js l:8
			})
		}
	));
	app.use(express.static(__dirname + '/../public')); // #Express Static Assets Folder

	/* #Includes for views ------------------------------------------------------ */
		/* # Pass User to every route ----------------------------------- */
		app.use(function (req, res, next) {

			//append request and session to use directly in views and avoid passing around needless stuff
			//res.locals.request = req;
			if(req.session && req.session.passport && req.session.passport.user)
			{
				res.locals.userSess = req.user;
			}else {
				res.locals.userSess = null;
			}

			//Make sure the user has admin permissions otherwise send him home
			if(req.originalUrl.indexOf('admin') !== -1 && res.locals.userSess.level < 1){
				res.redirect('/');
			}else{
				next(null, req, res);
			}
		});
		/* #Moment ------------------------------------------------------ */
		app.locals.moment = moment; //enable moment across all Jade files : Date managment

		/* # Display all variables passed to views----------------------- */
		//app.use(function (req, res, next) {
		//	console.info(res.locals);
		//	next();
		//});

	/* #Logger ------------------------------------------------------ */
	if (process.env.NODE_ENV === 'production') {
		// Production only stuff
		app.use(logger('combined'));
	} else {
		app.use(logger('dev'));
	}

	/* #Set up all views -------------------------------------------- */
	app.set('views', __dirname + '/../src/views');
	app.set('view engine', 'jade');

	//  // dynamic helpers
	//  // app.use(function(req,res,next){
	//  //     req.locals.session = "eeeeeeee";
	//  //     next();
	//  // });

	//  // cookieParser should be above session
	app.use(cookieParser()); // cookieParser should be above session

	//  // bodyParser should be above methodOverride
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(bodyParser.urlencoded({extended: true})); // bodyParser should be above methodOverride

	//  // express/mongo session storage
	//  app.use(session({
	//    secret: 'noobjs',
	//    store: new mongoStore({
	//      url: config.db,
	//      collection : 'sessions'
	//    })
	//  }));

	// connect flash for flash messages
	app.use(flash());

	app.use(function (req, res, next) {
		res.locals.pkg = pkg;
		next()
	});

	app.use(helpers('app name'));
}
