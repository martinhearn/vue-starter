var fs = require('fs');
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var vueify = require('vueify');


gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('public'));
});


gulp.task('css',function() {
    return gulp.src('src/css/main.css')
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/min'))
});

gulp.task('js',function() {
        return gulp.src('src/js/vue.js')
            .pipe(browserify({ transform: 'vueify', debug: true }))
             .pipe(rename('js/bundle.js'))
             .pipe(gulp.dest('public'))
});

gulp.task('misc', function () {
    return gulp.src([
            'src/*.{ico,png,txt}',
            'src/.htaccess'
        ])
        .pipe(gulp.dest('public'));
});


gulp.task('watch', function() {
    gulp.watch('src/css/*.css',['css']);
    gulp.watch('src/js/*.js',['js']);
    gulp.watch('src/js/*.vue',['js']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['html', 'css', 'js', 'misc']);
