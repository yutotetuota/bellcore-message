'use strict';

var gulp = require('gulp');
var vertcoreTasks = require('vertcore-build');

vertcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
