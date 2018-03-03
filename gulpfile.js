var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// PROJECT SPECIFIC SETTINGS
// #FONTS
var fonts_src = [
  'node_modules/font-awesome/fonts/*.*'
];

var fonts_dest = 'dist/fonts';

// #CSS
var css_src = [
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/animate.css/animate.min.css',
  'node_modules/font-awesome/css/font-awesome.min.css',
  'node_modules/magnific-popup/dist/magnific-popup.css'
];

var css_dest = 'dist/css';

// #Javascript

var js_src = [
  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
  'node_modules/jquery-parallax.js/parallax.min.js',
  'node_modules/smooth-scroll/dist/js/smooth-scroll.min.js',
  'node_modules/wowjs/dist/wow.min.js',
  'src/js/script.js'
];

var js_dest = 'dist/js';

// #SASS files

var scss_src = [
  'src/scss/theme.scss'
];

// #IMAGES files

var img_src = [
  'src/images/*.jpg',
  'src/images/*.png'
];

var img_dest = 'dist/images';

// #HTML pages

var html_src = [
  'src/index.html'
];

var html_dest = 'dist';


// SCRIPTS GULP

// Compile Sass into CSS & auto-inject into browser
gulp.task('sass', function () {
  return gulp.src(scss_src)
    .pipe(sass())
    .pipe(gulp.dest(css_dest))
    .pipe(browserSync.stream());
});

// Move Js files to /src/js folder
gulp.task('js', function () {
  return gulp.src(js_src)
    .pipe(gulp.dest(js_dest))
    .pipe(browserSync.stream());
});

// Move CSS files to dist folder
gulp.task('CSS', function () {
  return gulp.src(css_src)
    .pipe(gulp.dest(css_dest))
    .pipe(browserSync.stream());
});

// Move Fonts files to dist folder
gulp.task('fonts', function () {
  return gulp.src(fonts_src)
    .pipe(gulp.dest(fonts_dest))
    .pipe(browserSync.stream());
});

// Move images files to dist folder
gulp.task('images', function () {
  return gulp.src(img_src)
    .pipe(gulp.dest(img_dest))
    .pipe(browserSync.stream());
});

// Move HTML files to dist folder
gulp.task('html', function () {
  return gulp.src(html_src)
    .pipe(gulp.dest(html_dest))
    .pipe(browserSync.stream());
});

// Static server + watching scss/html/js files
gulp.task('serve', function () {

  browserSync.init({
    server: './dist'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(js_src, ['js']);
  gulp.watch(html_src, ['html']);
  gulp.watch(img_src, ['images']);

  gulp.watch([
    html_dest + '/*.html',
    js_dest + '/*.js',
    css_dest + '/*.css',
    img_dest + '/*.*'
  ]).on('change', browserSync.reload);
})

// build task
gulp.task('build', ['js', 'CSS', 'fonts', 'images', 'sass', 'html']);

//default task
gulp.task('default', ['build', 'serve']);