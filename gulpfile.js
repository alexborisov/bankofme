var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var htmlreplace = require('gulp-html-replace');
var mainBowerFiles = require('main-bower-files');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');

gulp.task('clean', function () {
  return del([
    './dist/*'
  ]);
});

gulp.task('js', ['clean'], function () {
  var vendorFiles = mainBowerFiles({
    "overrides": {
      "bootstrap": {
        "ignore": true
      },
      "less": {
        ignore: true
      }
    }
  });

  return gulp.src(vendorFiles.concat(['src/js/**/*.js', 'src/js/**/*.*.js']))
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('less', ['clean'], function () {
  return gulp.src('src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', ['clean'], function () {
  return gulp.src('src/html/**/*.html')
    .pipe(templateCache({
      filename: 'tpl.js',
      root: 'html',
      module: 'app'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('images', ['clean'], function () {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('fonts', ['clean'], function () {

  return gulp.src('bower_components/bootstrap/fonts/**/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['js', 'html', 'less', 'images', 'fonts'], function () {
  return gulp.src('src/index.html')
    .pipe(htmlreplace({
      'css': {
        src: 'style.css',
        tpl: '<link rel="stylesheet" href="%s">'
      },
      'js': {
        src: ['bundle.min.js', 'tpl.js'],
        tpl: '<script src="%s"></script>'
      }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['js', 'html', 'less'], function () {
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/html/**/*.html', ['html']);
});

gulp.task('default', ['build']);