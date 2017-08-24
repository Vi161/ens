/**
 * Created by vi on 23.08.17.
 */
var gulp = require('gulp');
var gulp = require('gulp');
// подключаем gulp-sass
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('css/style.scss')
        .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
    gulp.watch('css/**/*.scss', ['sass']);
    // другие ресурсы
})