var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', ['build'], function () {
	browserSync({
		files: [
			// Only reload when the style.css has been built.
			"./public/css/style.css",
			//reload with any js changes in the public folder
			"./public/js/app.js",
			//reload for any images changed in public
			"./img/**",
			// Exclude sourcemap files
			"!../public/css/*.map",
		]
	});
});