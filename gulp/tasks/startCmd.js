var gulp = require('gulp')
	, exec = require('child_process').exec
	, nodemon = require('gulp-nodemon')
	wait = require('gulp-wait');

gulp.task('startCmd', function (cb) {
	//nodemon(
	//	{
	//		script: 'bin/www',
	//		ext: 'js',
	//		ignore: [
	//			'public/**',
	//			'frontend/**',
	//		]
	//	})
	//	.on('restart', function () {
	//		console.log('restarted!')
	//	})
	//start mongoDB
	exec('start mongod --dbpath /data/db', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
