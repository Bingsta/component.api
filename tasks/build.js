import gulp from "gulp";
import path from "path";
import less from 'gulp-less'
import typescript from "gulp-tsb";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import mergeStream from "merge-stream";

import paths from './paths';

//package HTML files
export function html() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output));
}

//compile LESS files
export function css() {
  const processLess = function(lessPath) {
    return gulp.src(lessPath.src)
    .pipe(less())
    .pipe(gulp.dest(lessPath.dest));
  }
  
  return mergeStream(processLess(paths.less.framework), processLess(paths.less.toolkit));
}

//compile JS
export function ts() {
  var typescriptCompiler = typescriptCompiler | null;
  if(!typescriptCompiler) {
    typescriptCompiler = typescript.create(require("../tsconfig.json").compilerOptions);
  }
  return gulp.src('./app/**/*.ts')
  .pipe(plumber())
  .pipe(sourcemaps.init( { loadMaps: true }))
  .pipe(typescriptCompiler())
  .pipe(sourcemaps.write({ includeContent: false, sourceRoot: '/app' }))
  .pipe(gulp.dest('./dist/'));
}

//package fonts 
export function fonts() {
  console.log(paths.fonts);
  console.log(`${paths.less.toolkit.dest}fonts`);
  return gulp.src(paths.fonts).pipe(gulp.dest(`${paths.less.toolkit.dest}fonts`));
}