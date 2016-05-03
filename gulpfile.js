var fs = require('fs');
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var vueify = require('vueify');


gulp.task('html', function () {
     gulp.src('src/*.html')
        .pipe(gulp.dest('public'));
});


gulp.task('css',function() {

    gulp.src('node_modules/bootstrap/dist/fonts/*').pipe(gulp.dest('public/css/fonts'));
    gulp.src('node_modules/bootstrap/dist/css/*').pipe(gulp.dest('public/css/bootstrap'));

     gulp.src('src/css/main.css')
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/min'))
});

gulp.task('js',function() {
         gulp.src('src/js/vue.js')
            .pipe(browserify({ transform: 'vueify', debug: true }))
             .pipe(rename('js/bundle.js'))
             .pipe(gulp.dest('public'))
});

gulp.task('misc', function () {
     gulp.src([
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
