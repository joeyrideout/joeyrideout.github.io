var hm = require("html-minifier");
var nm = require("node-minify");
var fs = require('fs');
var uncss = require('uncss');

function minifyAndCleanHtml() {
  fs.readFile('index_source.html', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var output = hm.minify(data, {
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeEmptyAttributes: true
    });

    options = {
      stylesheets  : ['css/joeyrideout.blob.css']
    };
    uncss(output, options, function (error, output) {
        fs.writeFile('css/joeyrideout.clean.blob.css', output, function (err,data) {
          if (err) {
            return console.log(err);
          }
          new nm.minify({
            type: 'yui-css',
            fileIn: ['css/joeyrideout.clean.blob.css'],
            fileOut: 'css/joeyrideout.min.css',
            callback: function(err, min){
              if (err) {
                return console.log(err);
              }
            }
          });
        });
    });

    fs.writeFile('index.html', output, function (err,data) {
      if (err) {
        return console.log(err);
      }
    });
  })
}

new nm.minify({
  type: 'yui-css',
  fileIn: ['css/font.css', 'css/normalize.css', 'css/skeleton.css', 'css/custom.css'],
  fileOut: 'css/joeyrideout.blob.css',
  callback: function(err, min){
    if (err) {
      return console.log(err);
    }
    minifyAndCleanHtml();
  }
});

