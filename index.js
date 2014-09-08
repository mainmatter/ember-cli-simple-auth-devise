module.exports = {
  name: 'Ember CLI Simple Auth Devise',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-devise.amd.js', {
      exports: {
        'simple-auth-devise/authenticators/devise': ['default'],
        'simple-auth-devise/authorizers/devise':    ['default'],
        'simple-auth-devise/initializer':           ['default']
      }
    });
  }
}
