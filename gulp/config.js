var appRoot = require('app-root-path').path; // Package to find root of project

var app = require('express')();
var path = require('path');
var $ = require('gulp-load-plugins')({lazy: true});

/**
* @returns{{config.clientFolder}}
 */
module.exports = function () {
  'use strict';
  var paths = {
    views: appRoot + '/views/',
    myJs: appRoot + '/client/js/',
    dev: appRoot + '/src/'
  };

  var config = {
    clientFolder: appRoot + '/client/',
    jsFiles: paths.myJs + '**/*.js',
    jadeIndex: {
      target: paths.dev + 'index.jade',
      dest: paths.views
    }
  };

  return config;

};
