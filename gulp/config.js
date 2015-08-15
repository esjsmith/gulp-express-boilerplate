var appRoot = require('app-root-path').path; // Package to find root of project

var app = require('express')();
var path = require('path');
var gulp = require('gulp');
// var config = require(appRoot + '/gulp/config')();
var hlp = require('./helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 *
 * @returns {{build: string, getWiredepDefaultOptions: Function, index: string, views: *}}
 */
module.exports = function () {
  'use strict';
  var paths = {
    views: appRoot + '/views/'
  };

  var config = {
    index: paths.views + 'index.jade'
  };
  
  return config;

};