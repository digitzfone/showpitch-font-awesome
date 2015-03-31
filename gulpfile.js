var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-rimraf');


gulp.task('less', ['fonts'], function(){
	return gulp.src('./src/less/font-awesome.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('fonts', ['clean'], function(){
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('clean', function(){
return gulp.src('./dist/fonts', {read: false})
        .pipe(clean());
});