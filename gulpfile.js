/**
* Created by vi on 23.08.17.
*/
var gulp = require('gulp');
// подключаем gulp-sass
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');  // v1.2.2
var autoprefix = require('gulp-autoprefixer');  // v1.0.1


gulp.task('styles', function() {
    return gulp.src('css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '.'}))

        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefix({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../scripts/app'}))

        .pipe(gulp.dest('css'));
});
