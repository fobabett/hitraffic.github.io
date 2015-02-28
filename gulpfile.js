var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('./sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('watch_styles', function () {
  gulp.watch('./sass/**/*.scss', ['styles']);
  // gulp.watch('assets/jade/*.jade', ['templates']);
})

// gulp.task('templates', function() {
//   var YOUR_LOCALS = {};

//   gulp.src('*.jade')
//     .pipe(jade({
//       locals: YOUR_LOCALS,
//       pretty: true
//     }))
//     .pipe(gulp.dest('assets/jade'))
//     .pipe(notify({ message: 'Your Jade file has been molded into HTML.' }))
// });


gulp.task('default', ['watch_styles']);