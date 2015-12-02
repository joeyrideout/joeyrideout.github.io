var hm = require("html-minifier");
var nm = require("node-minify");
var fs = require('fs');
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
  fs.writeFile('index.html', output, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(output);
  });
});

new nm.minify({
  type: 'yui-css',
  fileIn: ['css/font.css', 'css/normalize.css', 'css/skeleton.css', 'css/custom.css'],
  fileOut: 'css/joeyrideout.min.css',
  callback: function(err, min){
    console.log(err);
  }
});
