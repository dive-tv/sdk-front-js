var browserify = require('browserify');
var babelify = require("babelify");
var fs = require("fs");

browserify({
      entries: ['index.js'],
      debug: true,
      extensions: ['.js', '.json', '.ts', '.js.es2015'],
      basedir : "",
      standalone: 'touchviefront'})
	.transform(babelify, {presets: ["es2015"]})
	.bundle()
	.on("error", function (err) { console.log("Error: " + err.message); })
	.pipe(fs.createWriteStream("dist/bundle.js"));