/**
 * TODO: add packages: app-root-dir or app-root
 */

/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var appRoot = require('app-root-path').path; // Package to find root of project

var gulp = require('gulp');
var wrench = require('wrench');
var hlp = require(appRoot + '/gulp/helpers')();
var config = require(appRoot + '/gulp/config.js')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i)
    .test(file);
  })
  .map(function(file) {
    require('./gulp/' + file);
});

gulp.task('help', function() {
  console.log(appRoot + '/gulp/config.js');
  console.log(config);
});

gulp.task('wirer', function(){
  hlp.log('wirer');
  
  var wiredep = require('wiredep').stream;
  var options = {
    directory: appRoot + './bower_components',
    bowerJson: require(appRoot + '/bower.json'),
    onError: function  (err) {
      hlp.log(err);
    }
  };
  
    return gulp
    .src('index.jade')
    .pipe($.plumber())
    .pipe(wiredep(options))
    .pipe(gulp.dest(appRoot + '/dest'));
    
});