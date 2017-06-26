var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require ('gulp-clean'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect-php'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();

// Run all watches with simple `gulp` command
gulp.task('default', ['develop'])

// Assemble hot reload, file copy, preprocessor, and watches to create dev environment
gulp.task('develop', ['connect-sync', 'copyHTML', 'copyPHP', 'copyFonts', 'processSass', 'concatJS'], function() {
  gulp.watch('source/*.html', ['copyHTML']);
  gulp.watch('source/*.php', ['copyPHP']);
  gulp.watch('source/assets/img/*', ['imageMin']);
  gulp.watch('source/assets/css/**/*.scss', ['processSass']);
  gulp.watch('source/assets/js/*.js', ['concatJS']);
});

// Run all build related tasks at once - excludes hot reload & watches
gulp.task('build', function() {
  runSequence('clean', 'copyHTML', 'copyPHP', 'copyFonts','processSass', 'concatJS', 'imageMin');
})

// Clean out build folder, be a good citizen. Copy over any mock data after.
gulp.task('clean', function() {
  return gulp.src('build', {read: false})
             .pipe(clean());
})

// Copy HTML from ./source to ./build
gulp.task('copyHTML', function() {
  gulp.src('source/*.html')
      .pipe(gulp.dest('build'))
      .pipe(browserSync.reload({stream: true}));
});

// Copy PHP from ./source to ./build
gulp.task('copyPHP', function() {
  gulp.src('source/*.php')
      .pipe(gulp.dest('build'))
      .pipe(browserSync.reload({stream: true}));
});

// Copy fonts from ./source/assets/font to ./build/assets/font
gulp.task('copyFonts', function() {
  gulp.src('source/assets/font/*')
      .pipe(gulp.dest('build/assets/font'));
});

// Process ./source/assets/css/main.scss to ./build/assets/css/styles.css
gulp.task('processSass', function() {
  return gulp.src('source/assets/css/main.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(sourcemaps.write())
             .pipe(rename('styles.css'))
             .pipe(gulp.dest('build/assets/css/'))
             .pipe(browserSync.reload({stream: true}));
});

// Process ./source/assets/js/* to ./build/assets/js/bundle.js
gulp.task('concatJS', function() {
  return gulp.src('source/assets/js/*.js')
             .pipe(sourcemaps.init())
             .pipe(concat('scripts.js'))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('build/assets/js'))
             .pipe(browserSync.reload({stream: true}));
});

// Load browserSync to create local server & hot reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  });
});

// Enable PHP & BrowserSync to work together
gulp.task('connect-sync', function() {
  connect.server({ base: 'build' }, function(){
    browserSync.init({
      proxy: '127.0.0.1:8000'
    });
  });
});

// Minify images in ./source/assets/img and output to ./build/assets/img
gulp.task('imageMin', function() {
  return gulp.src('source/assets/img/*')
             .pipe(imagemin())
             .pipe(gulp.dest('build/assets/img'))
             .pipe(browserSync.reload({stream: true}));
});
