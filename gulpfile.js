'use strict';

// Module to require whole directories
var requireDir = require('require-dir'),
	gulp = require('gulp');

// Pulling in all tasks from the tasks folder
requireDir('./gulp/tasks', { recurse: true });

// var gulp = require('gulp'),
// 	sass = require('gulp-sass'),
// 	sourcemaps = require('gulp-sourcemaps');

// gulp.task('sass', function () {
//   return gulp.src('./styles/**/*.scss')
//   	.pipe(sourcemaps.init())
//   	.pipe(sass().on('error', sass.logError))
//   	.pipe(sourcemaps.write('./maps'))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('default', function() {
//   // place code for your default task here
// });