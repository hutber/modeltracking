var gulp = require('gulp');
var jade = require('gulp-jade');
var handleErrors = require('../util/handleErrors');
var debug = require('gulp-debug');

gulp.task('jade', function () {
	return gulp.src('./frontend/views/**/*.jade')
		.on('error', handleErrors)
		//.pipe(debug({verbose: true}))
		.pipe(jade({
			client: true
		}))
		.pipe(gulp.dest('frontend/js/jade'));
});
