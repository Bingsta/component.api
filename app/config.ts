declare var require: any;
require.config({
  paths: {
    "knockout":               "../node_modules/knockout/build/output/knockout-latest",
    "durandal":               "../node_modules/durandal/js",
    "plugins":                "../node_modules/durandal/js/plugins",
    "transitions":            "../node_modules/durandal/js/transitions",
    "jquery":                 "../node_modules/jquery/dist/jquery",
    "text":                   "../node_modules/requirejs-text/text",
    "bootstrap":              "../node_modules/bootstrap/dist/js/bootstrap",
    "prismjs":                "../node_modules/prismjs/prism",
    "clipboard":              "../node_modules/clipboard/dist/clipboard",
    "prism-components":       "../node_modules/prismjs/components",
    "serialize-javascript":   "../node_modules/serialize-javascript/index",
    "util":                   "../node_modules/util/util"
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    prismjs: {
      exports: 'Prism'
    },
    'serialize-javascript': {
      deps: ['util'],
    },
    'prism-components': {
      exports: 'components'
    }
  }
});
require(["main"]);