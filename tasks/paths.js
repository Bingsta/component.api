var appRoot     = '/app';
var assetRoot   = '/assets';
var outputRoot  = '/dist';
var framework   = '/framework/styles';
var toolkit     = '/toolkit/styles';

module.exports = {
  root:         `.${appRoot}/`,
  output:       `.${outputRoot}/`,
  source_ts:    `.${appRoot}/**/*.ts`,
  html:         `.${appRoot}/**/*.html`,
  less: {
    toolkit: {
      src:      `.${assetRoot + toolkit}/*.less`,
      dest:     `.${outputRoot + assetRoot + toolkit}/`
    },
    framework: {
      src:      `.${assetRoot + framework}/*.less`,
      dest:     `.${outputRoot + assetRoot + framework}/`
    },
    watch:      `.${assetRoot}/**/*.less`,
  },
  fonts: `.${assetRoot + toolkit}/fonts/**/*`
};