var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuthDevise(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth Devise';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISimpleAuthDevise.prototype.treeFor = function included(name) {
  var treePath = path.join('node_modules/ember-cli-simple-auth-devise', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISimpleAuthDevise.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-simple-auth/simple-auth-devise.amd.js', {
    'simple-auth-devise/authenticators/devise': ['default'],
    'simple-auth-devise/authorizers/devise':    ['default'],
    'simple-auth-devise/ember':                 ['default']
  });
};

module.exports = EmberCLISimpleAuthDevise;
