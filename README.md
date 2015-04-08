#  Ember Simple Auth Devise

This is an npm package that contains the Ember Simple Auth devise extension
library packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

**Ember Simple Auth Devise requires at least Ember CLI 0.0.44.**

To install simply run

```
ember install ember-cli-simple-auth
ember install ember-cli-simple-auth-devise
```

in your Ember CLI project's root.

If you're using Ember CLI 0.2.2 or older, run

```
ember install:addon ember-cli-simple-auth
ember install:addon ember-cli-simple-auth-devise
```

If you're using Ember CLI 0.1.4 or older, run

```
npm install --save-dev ember-cli-simple-auth
ember generate ember-cli-simple-auth
npm install --save-dev ember-cli-simple-auth-devise
ember generate ember-cli-simple-auth-devise
```

### Configuration

Ember Simple Auth Devise uses the Ember CLI project's configuration as defined
in `config/environment.js`. Configure values for `ENV['simple-auth-devise']`,
e.g.:

```js
ENV['simple-auth-devise'] = {
  resourceName: 'account'
};
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
