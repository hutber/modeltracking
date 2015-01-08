/* browserify task
 ---------------
 Bundle javascripty things with browserify!

 If the watch task is running, this uses watchify instead
 of browserify for faster bundling using caching.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var jadeify = require('jadeify');
require('uglifyify');

	gulp.task('browserify', function () {
		var bundler = browserify({
			// Required watchify args
			cache: {}, packageCache: {}, fullPaths: false,
			// Specify the entry point of your app
			entries: [
				'./frontend/js/app.js'
			],
			// Add file extentions to make optional in your requires
			extensions: ['.js'],
			// Enable source maps!
			debug: true
		});

		//bundler.transform({
		//	global: true
		//}, 'uglifyify');

		var bundle = function () {
			// Log when bundling starts
			bundleLogger.start();

			return bundler
				.transform(jadeify)
				.bundle()
				// Report compile errors
				.on('error', handleErrors)
				//make the file a little bit smaller
				//.pipe(uglifyify())
				// Use vinyl-source-stream to make the
				// stream gulp compatible. Specifiy the
				// desired output filename here.
				.pipe(source('app.js'))
				// Specify the output destination
				.pipe(gulp.dest('./public/js'))
				// Log when bundling completes!
				.on('end', bundleLogger.end);
		};

		//if (global.isWatching) {
		//	bundler = watchify(bundler);
		//	// Rebundle with watchify on changes.
		//	bundler.on('update', bundle);
		//}

		return bundle();
	});
