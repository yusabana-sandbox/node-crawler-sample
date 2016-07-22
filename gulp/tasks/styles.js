import gulp from 'gulp';
import sass from 'gulp-sass';
import config from '../config';

function styles() {
  return gulp.src(config.src + '/**/!(_)*.{scss,sass}')
    .pipe(sass(config.sassOptions))
    .pipe(gulp.dest(config.dest));
}

gulp.task('styles', ['clean'], styles);
