'use strict';

module.exports = {
  name: 'ember-cli-loading',

  included: function included(app) {
    this.app = app;
    this._super.included(app);
  }
};
