'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
    return browserify({ entries: './frontend/src/index.jsx', extensions: ['.jsx'], debug: true })
        .transform(babelify, { presets: ['react', 'es2015'] })
        .bundle()
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('./frontend/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);
