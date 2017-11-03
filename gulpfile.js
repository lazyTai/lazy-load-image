var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");
var rollup = require("gulp-rollup");
var destFolder = "./dist";

gulp.task("default", function () {
    process.env.NODE_ENV = "release";
    return gulp.src("./src/**/*.js")
        // ----------- rolling up --------------
        .pipe(rollup({
            format: "umd",
            name: "LazyLoad",
            input: "./src/index.js"
        }))
        .pipe(rename("lazyload.es2015.js"))
        .pipe(gulp.dest(destFolder)) // --> writing rolledup
        // ----------- babelizing --------------
        .pipe(babel())
        .pipe(rename("lazyload.js"))
        .pipe(gulp.dest(destFolder)) // --> writing babelized
        // ----------- minifying --------------
        .pipe(uglify())
        .pipe(rename("lazyload.min.js"))
        .pipe(gulp.dest(destFolder)); // --> writing uglified
});

gulp.task("watch", function () {
    gulp.watch("./src/**/*.js", ["default"]);
    // Other watchers
});