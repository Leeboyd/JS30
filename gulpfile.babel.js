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
    './06/06.js',
    './04/04.js',
    './03/03.js',
    './02/02.js',
    './01/01.js'
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

gulp.task('watch', () => {
  gulp.watch(['./**/**.js'],['es6'])
})
