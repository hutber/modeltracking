var express = require('express')
//config = require('./app/config'),
	, fs = require('fs')
/*
==================================================
Table of Contents
==================================================
	#Load configurations
	#Initiate express
	#Mongo
	#express settings
	#Routes
 		#API
 	#Errors 404/500
 	#Export Module
*/

/* #Load configurations ------------------------------------------------------- */
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
	, config = require('../config/config')[env]
	, auth = require('../config/middlewares/authorization')
	, userSess = require('../config/userSessions')
	, mongoose = require('mongoose');

// Bootstrap models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
	require(models_path+'/'+file);
});

/* #Initiate express ---------------------------------------------------------- */
var app = express();

/* #Mongo --------------------------------------------------------------------- */
var db = require('./db')(app, config);

/* # express settings --------------------------------------------------------- */
require('../config/express')(app, config);

/* # Routes ------------------------------------------------------------------- */
require('../src/routes')(app, auth);

/* # Lastly Errors 404/500  --------------------------------------------------- */
require('../config/errorhandlers')(app);

/* #Export Module ------------------------------------------------------------- */
exports = module.exports = app;
