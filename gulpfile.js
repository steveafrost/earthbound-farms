var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// Run all watches with simple `gulp` command
gulp.task('default', ['watch'])

// Process ./assets/css/main.scss to ./assets/css/main.css
gulp.task('process-sass', function() {
  return gulp.src('source/assets/css/main.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('build/assets/css/'))
             .pipe(browserSync.reload({
               stream: true
             }))
});

// Process ./assets/js/* to ./assets/js/bundle.js
gulp.task('concat-and-uglify', function() {
  return gulp.src('source/assets/js/*')
             .pipe(sourcemaps.init())
             .pipe(concat('scripts.js'))
             .pipe(gulp.dest('build/assets/js'))
             .pipe(sourcemaps.write())
});

// Load browserSync to create local server & hot reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  });
});

// Minify images in ./assets/img
gulp.task('image-min', function() {
  return gulp.src('source/assets/img/*')
             .pipe(imagemin())
             .pipe(gulp.dest('build/assets/img'));
});

// Assemble all tasks as watches in "one watch to rule them all"
gulp.task('watch', ['browserSync', 'process-sass'], function() {
  gulp.watch('source/assets/css/**/*.scss', ['process-sass']);
  gulp.watch('source/assets/img/*', ['image-min']);
  gulp.watch('source/assets/js/*', ['concat-and-uglify'])
});
