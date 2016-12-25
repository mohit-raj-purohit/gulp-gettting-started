var gulp = require('gulp'),
    del = require('del'),
    config = require('../config'); // Relative to this file

// Clean
gulp.task('clean', function() {
    return del([config.paths.assets.css]);
});