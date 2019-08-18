var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css'); 
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');

gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('Задача выполнена');  
  done();
}

gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))

  done();  
});

gulp.task('move-js', function(done) {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js/'))

  done();  
});

gulp.task('htmlmin', function (cb){
  return gulp.src('./src/.html')
  .pipe(htmlmin({
   collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))
  cb();
});  

gulp.task('fonts', function(cb) {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts//'));
    cb();
});

gulp.task('tinypng', function (done) {
  return gulp.src('./src/img/**/*')
      .pipe(tinyPNG({
          key: 'PHkL8BhR1qdWtLXHbh8v3mbpcNf3mCr1'
      }))
      .pipe(gulp.dest('dist/img/'));
      done();
});

gulp.task('compress', function (cb) {
  gulp.src(['src/js/**/.js', '!src/js//*.min.js'])
  .pipe(uglify())
  .pipe(rename({
   suffix: ".min"
  }))
  .pipe(gulp.dest('dist/js/'))
  return gulp.src('src/js//.min.js')
  .pipe(gulp.dest('dist/js/'))
  cb();
 });