import gulp from "gulp";
import del from "del";
import vinylPaths from "vinyl-paths";

//delete all files from distribution folder
export function clean() {
  return gulp.src('./dist/')
  .pipe(vinylPaths(del));
}