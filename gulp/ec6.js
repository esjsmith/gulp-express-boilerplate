"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var del = require('del');
var through2 = require('through2');

gulp.task('babel', ['clean:babel'], function() {
  /**
   * This solution uses browserify and babelify as per the
   * following gist:
   *  https://gist.github.com/c95444472e6d3c5f8460.git
   */
  return gulp
    .src('./srv/js/calc.js')
    .pipe(through2.obj(function(file, enc, next) {
      browserify(file.path, {debug: true})
        .transform(babelify)
        .bundle(function(err, res) {
          if (err) {return next(err);}
          file.contents = res;
          next(null, file);
        });
    })
      .on('error', function(error) {
        console.log(error.stack);
        this.emit('end');
      })
    )
    .pipe($.rename('calc.js'))
    .pipe(gulp.dest('./client/js/'));
});

gulp.task('watch:babel', function() {
  gulp.watch('./srv/js/**/*.js', ['babel']);
});

gulp.task('clean:babel', function() {
  del('./client/js/**/*.js');
});
