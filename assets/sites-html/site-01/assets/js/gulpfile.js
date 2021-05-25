const gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sourcemaps = require("gulp-sourcemaps"),
	runSequence = require("run-sequence"),
    plumber = require("gulp-plumber")

var onError = function(err){
     console.log(err)
}

gulp.task("compress", () => {
	return gulp.src("./script.js").pipe(uglify()).pipe(gulp.dest("dist"));
});
