var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config')();

module.exports = function() {

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
      var that = this;
      var target, source;
      switch (jsOrCss) {
        case 'js':
          that.log('Wiring in dev JavaScript files.');
          sources = gulp.src(config.jsFiles);
            // The list of js files for the client as given by the config file
          that.log('JS files are from ', sources);

          target = gulp.src(config.jadeIndex.target);
            // The dev-index.jade file into which everything will be inserted
          that.log('JS files are being injected into ', target);

          return target
            .pipe($.inject(sources))
            .pipe(gulp.dest(config.jadeIndex.dest));

          break;
        case 'css':
          that.log('Wiring in dev CSS files.')
          break;
      }
    }
  };
};
