var appRoot = require('app-root-path').path; // Package to find root of project

var app = require('express')();
var path = require('path');
var gulp = require('gulp');
var config = require(appRoot + '/gulp/config.js')();
var hlp = require('./helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('arr', function(){
  
});

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
})