'use strict';

// TODO: Change name and add any relevant imports.

module.exports = {
  name: 'ember-cli-addon-template',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

   // app.import("node_modules/some-dependency/path/to/file");
   // app.import("bower_components/some-dependency/path/to/file");
  }
};
