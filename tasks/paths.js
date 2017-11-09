var appRoot     = '/app';
var assetRoot   = '/assets';
var outputRoot  = '/dist';
var framework   = '/framework';
var toolkit     = '/toolkit';

module.exports = {
  root:         `.${appRoot}/`,
  output:       `.${outputRoot}/`,
  source_ts:    `.${appRoot}/**/*.ts`,
  html:         `.${appRoot}/**/*.html`,
  less: {
    toolkit: {
      src:      `.${assetRoot + toolkit}/styles/*.less`,
      dest:     `.${outputRoot + assetRoot + toolkit}/styles`
    },
    framework: {
      src:      `.${assetRoot + framework}/styles/*.less`,
      dest:     `.${outputRoot + assetRoot + framework}/styles`
    },
    watch:      `.${assetRoot}/**/*.less`,
  },
  fonts: `.${assetRoot + toolkit}/styles/fonts/**/*`,
  images: {
    toolkit: {
      src:      `.${assetRoot + toolkit}/images/**/*`,
      dest:     `.${outputRoot + assetRoot + toolkit}/images/`
    },
    framework: {
      src:      `.${assetRoot + framework}/images/**/*`,
      dest:     `.${outputRoot + assetRoot + framework}/images/`
    },
    watch:      `.${assetRoot}/**/images/*`,
  }
};