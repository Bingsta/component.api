import gulp from "gulp";
import Browser from "browser-sync";

import { ts, html, css, images } from "./build";
import paths from "./paths";

const browser = Browser.create();

export function server() {
  let config = {
      online: false,
      server: {
          baseDir: ['.'],
          middleware: [
              function(req, res, next) {
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  next();
              }]
      }
  }

  browser.init(config);

  gulp.task('reload', function(done) {
    browser.reload();
    done();
  })

  gulp.watch(paths.source_ts,   gulp.series(ts, 'reload'));
  gulp.watch(paths.html,        gulp.series(html, 'reload'));
  gulp.watch(paths.less.watch,  gulp.series(css, 'reload'));
  gulp.watch(paths.images.watch,  gulp.series(images, 'reload'));
  
}