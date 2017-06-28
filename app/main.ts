import * as ko from "knockout";
import * as app from "durandal/app";
import * as system from "durandal/system";
import * as router from "plugins/router";
import * as viewLocator from "durandal/viewLocator";
import * as bootstrap from 'bootstrap';

import {shell} from "./viewmodels/shell";


router.install();

app.configurePlugins({
  widget: true
});

app.start().then(() => {
  let bs = bootstrap;
  viewLocator.useConvention();
  return app.setRoot(shell);
});