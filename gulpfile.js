var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('./sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('watch_styles', function () {
  gulp.watch('./sass/**/*.scss', ['styles']);
})


gulp.task('default', ['watch_styles']);