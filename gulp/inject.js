'use strict';

var appRoot = require('app-root-path').path; // Package to find root of project

var app = require('express')();
var path = require('path');
var gulp = require('gulp');
var config = require(appRoot + '/gulp/config.js')();
var hlp = require('./helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('wiredep', function () {
  hlp.log('wiredep, yo!');
  console.log(config);

  var wiredep = require('wiredep').stream;
  var options = {
    directory: appRoot + '/bower_components/',
    bowerJson: require(appRoot + '/bower.json'),
    onError: function  (err) {
      hlp.log(err);
    }
  };

  return gulp
    .src(config.index)
    .pipe($.plumber())
    .pipe(wiredep(options))
    .pipe(gulp.dest(appRoot + '/dest'));
});

gulp.task('inject', ['clean:index', 'inject:js'], function(){
  // TODO: add inject:css once there is a pre-processor for css
  /*
   * Inject task will place in custom CSS and JS into the appropriate places
   * in the targeted files. Because inject:css may require a compile step,
   * based on the user's style language preference, it is done seperately.
   */
 });



gulp.task('inject:css', function(done) {
  hlp.inject('css');
});

gulp.task('inject:js', function(done){
  hlp.inject('js');
});
