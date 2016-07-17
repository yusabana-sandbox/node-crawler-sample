// import requireDir from 'require-dir';
// requireDir('./gulp');

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';

gulp.task('js.uglify', () =>
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
);
