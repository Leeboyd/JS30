//--------------------------------------
// gulpfile for general purpose
//--------------------------------------
import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import gutil from 'gulp-util'
import rename from 'gulp-rename'
import es from 'event-stream'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
browserSync.create();
// --------------------------------------
// remember npm install babel-preset-es2015 --save
// --------------------------------------

// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up into one file can have plugins.
// Babelify - a babel plugin for browserify, to make browserify
// handle es6 including imports.

gulp.task('es6', () => {
  // define input files
  const files = [
    // './HEX0/hex01.js',
    // './20/20.js',
    // './19/19.js',
    // './06/06.js',
    // './04/04.js',
    // './03/03.js',
    // './02/02.js',
    // './01/01.js'
  ]
    // map them to our stream function
  const tasks = files.map((entry) => {
    return browserify({ entries: [entry] })
        .transform('babelify', { presets: ["es2015"] })
        .bundle()
        .on('error', gutil.log)
        .pipe(source(entry))
    // restore file information and postfix it
        .pipe(
            rename({
              extname: '.finish.js'
            })
         )
        .pipe(gulp.dest('./'))
  })
    // create a merged stream
    // We merge that array to one stream which will be returned from our task.
    // This way, we tell gulp that this stream is the one stream to execute.
    // That it’s an array internally does not bother anymore.
  return es.merge.apply(null, tasks)
})

// gulp.task('js', () => {
//   gulp.watch(['./**/**.js'],['es6'])
// })

gulp.task('scss', () => {
  gulp.src('./**/style.scss')
  .pipe(sass().on('error', sass.logError))
  // .pipe(gulp.dest('./public/css'));
  .pipe(
    rename({
      extname: '.css'
    })
  )
  .pipe(gulp.dest('./'))
})

// Static Server + watching scss/html files
gulp.task('serve', ['es6', 'scss'], () => {
  browserSync.init({
    server: './'
  });
  gulp.watch(['./**/**.js'],['es6'])
  gulp.watch('./**/style.scss', ['scss']).on('change', browserSync.reload);
  gulp.watch("./**/index.html").on('change', browserSync.reload);
  gulp.watch("./**/style.css").on('change', browserSync.reload);
});