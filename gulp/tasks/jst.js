var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

gulp.task('jst', function () {
	return gulp.src('./frontend/html/**/*.html')
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.on('error', handleErrors)
		//.pipe(jst())
		//.pipe(gulp.dest('../public/js'));
		.pipe(template())
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('./frontend/js'));
});
