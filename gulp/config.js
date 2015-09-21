var appRoot = require('app-root-path').path; // Package to find root of project

var app = require('express')();
var path = require('path');
var $ = require('gulp-load-plugins')({lazy: true});

/**
 *
 * @returns {{build: string, getWiredepDefaultOptions: Function, index: string, views: *}}
 */
module.exports = function () {
  'use strict';
  var paths = {
    views: appRoot + '/views/',
    myJs: appRoot + '/client/js/',
    dev: appRoot + '/dev/'
  };

  var config = {
    clientFolder: appRoot + '/client/',
    jsFolder: paths.myJs,
    indexDev: paths.dev + 'dev-index.jade',
    jadeIndex: {
      target: paths.dev + 'dev-index.jade',
      dest: paths.views
    }
  };
  
  return config;

};