var gulp = require('gulp');
var app = require('express')();
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config')();

/**
 *
 * @returns {{log: Function, inject: Function}}
 */
module.exports = function () {

  return {
    log: function log(msg) {
      if (typeof(msg) === 'object') {
        for (var item in msg) {
          if (msg.hasOwnProperty(item)) {
            $.util.log($.util.colors.blue(msg[item]));
          }
        }
      } else {
        $.util.log($.util.colors.yellow(msg));
      }
    },
    inject: function (jsOrCss) {
      var src // This is the dev js or css that needs injected
       ,  target;  // This is the Jade file that will receive the injected stuff
      var that = this;
      switch (jsOrCss) {
        case 'js':
          that.log("Inserting JS into ...");
          break;
        case 'css':
          // stuff
          break;
      }
    }
  };
};