var gulp = require("gulp"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

var onError = function (err) {
	console.log(err);
};

gulp.task("default", function () {
	runSequence = "sass";
});

gulp.task("sass", function () {
	return gulp
		.src("../scss/*.scss")
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(gulp.dest("../css"));
});
