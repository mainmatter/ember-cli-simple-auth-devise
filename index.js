module.exports = {
  name: 'ember-cli-simple-auth-oauth2',

  included: function(app) {
    this._super.included(app);

    this.app.import('bower_components/ember-simple-auth/simple-auth-devise.amd.js', {
      exports: {
        'simple-auth-devise/authenticators/devise': ['default'],
        'simple-auth-devise/authorizers/devise':    ['default'],
        'simple-auth-devise/initializer':           ['default']
      }
    });
  }
}
