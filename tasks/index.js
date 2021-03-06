import gulp from "gulp";

import { scripts } from "./webpack";
import { server } from "./server";
import { html, css, ts, fonts, images } from "./build";
import { clean } from "./clean";

export const dev    = gulp.series( clean, [html, css, ts, fonts, images], server );
export const build  = gulp.series( scripts );

export default dev;