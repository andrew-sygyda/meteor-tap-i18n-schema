Package.describe({
  name: 'ansyg:tap-i18n-schema',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'Simple solution to join tap:i18n-db and aldeed:collection2',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.2');

  api.use([
    'underscore',
    'check@1.0.0',
    'tap:i18n-db@0.4.0',
    'aldeed:collection2@2.3.2'
  ]);

  api.addFiles('ansyg:tap-i18n-schema.js');
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'underscore',
    'tap:i18n-db@0.4.0',
    'check@1.0.0',
    'aldeed:collection2@2.3.2'
  ]);

  api.use('ansyg:tap-i18n-schema');

  api.addFiles('ansyg:tap-i18n-schema-tests.js');
});
