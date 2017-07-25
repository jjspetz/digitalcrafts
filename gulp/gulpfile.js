var gup = require('gulp');

gulp.task('hello', function() {
  console.log('hello');
})

gulp.task('goodbye', function() {
  console.log('goodbye');
});

// example
// gulp.task('build_js', function() {
//   // Do something that "builds stuff"
//   var stream = gulp.src(/*some source path, can take an array*/)
//   .pipe(somePlugin())
//   .pipe(someOtherPlugin())
//   .pipe(gulp.dest(/*some destination*/));
//
//   return stream;
// });

gulp.task('build_js', function() {
  // Do something that "builds stuff"
  var stream = gulp.src(['src/**/*.js*', 'lib/**/.js'])
  .pipe(bable())
  .pipe(uglify())
  .pipe(gulp.dest('dist/output.min.js'));

  return stream;
});
