// Package to find root of project
var appRoot = require('app-root-path').path;
var app = require('express')();
var config = require(appRoot + '/gulp/config.js')();
var del = require('del');
var gulp = require('gulp');

var hlp = require('./helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 * Remove all styles from the build and temp folders
 * @param  {Function} done - callback when complete
 */
gulp.task('clean:styles', function(done) {
    // var files = [].concat(
    //     config.temp + '**/*.css',
    //     config.build + 'styles/**/*.css'
    // );
    // clean(files, done);
    hlp.log('No style pre-processor to clean yet.')
});

gulp.task('clean:index', function(done) {
  clean(config.jadeIndex.dest + 'index.jade', done);
});

// ===== Helper function =====
/**
 * Delete all files in a given path
 * @param  {Array}   path - array of paths to delete
 * @param  {Function} done - callback when complete
 */

function clean(path, done) {
    hlp.log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
};
