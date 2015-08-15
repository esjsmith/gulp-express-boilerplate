module.exports = function() {
  var $ = require('gulp-load-plugins')({lazy: true});

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
    }
  };
};