var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    minifyHTML = require('gulp-minify-html');

var supportedBrowsers = ['last 2 versions', '> 1%', 'ie >= 8', 'Firefox ESR', 'Opera >= 12'];

var sourceDir = 'source/',
    destDir = 'dist/';

gulp.task('styles', function() {

    return gulp.src(sourceDir + 'sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: supportedBrowsers
        }))
        .pipe(gulp.dest(destDir + 'stylesheets'));
});

gulp.task('html', function() {

    return gulp.src(sourceDir + '*.html')
        .pipe(minifyHTML({
            conditionals: true,
            spare: true
        }))
        .pipe(gulp.dest(destDir));
});

gulp.task('default', function () {
    gulp.watch(sourceDir + 'sass/**/*.scss', ['styles']);
    gulp.watch(sourceDir + '*.html', ['html']);
});
