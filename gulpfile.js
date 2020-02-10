const gulp = require('gulp');
const merge = require('gulp-merge-json');
const zip = require('gulp-zip');

// Add secret OAuth stuff from
// multiple JSON files into manifest.json
function compileManifest(cb) {
  gulp.src(['manifest.json', 'oauth_client_id.json', 'webstore_key.json'])
    .pipe(merge({
      fileName: 'manifest.json'
    }))
    .pipe(gulp.dest('./dist/'));
  cb();
}

// Copy only the minimum required files for Chrome extension into dist/ directory
// includes webpack bundled Vue.js app
function createDist(cb) {
  gulp.src([
      'index.html',
      'bundle.js',
      'bundle.js.map',
      'background.js',
      'assets/icons/*.*'
    ])
    .pipe(gulp.dest('./dist/'));
  cb();
}

// Copy _locales/ directory including sub-directories
// into dist/ directory for internationalization
function createDist_locales(cb) {
  gulp.src([
      '_locales/**/*'
    ], { base: './' })
    .pipe(gulp.dest('./dist/'));
  cb();
}

// Package dist/ directory into .zip archive
function zipDist(cb) {
  gulp.src('./dist/')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
  cb();
}

// Watch for changes within Vue.js app
// and also in other extension related files
function watch(cb) {
  gulp.watch([
    './src/**/*',
    'index.html',
    'background.js',
    'manifest.json',
    'assets/icons/*.*'
    ], build);
  cb();
}

const build = gulp.series(compileManifest, createDist, createDist_locales);

exports.watch = watch;
exports.zip = zipDist;
exports.build = build;
exports.default = build;
