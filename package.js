Package.describe({
  name: 'ansyg:tap-i18n-schema',
  version: '0.1.1',
  summary: 'Simple solution to join tap:i18n-db and aldeed:collection2',
  git: 'https://github.com/andrew-sygyda/meteor-tap-i18n-schema',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  var both = [ 'client', 'server' ];
  api.versionsFrom('1.0.3.2');

  api.use([
    'underscore',
    'check@1.0.0',
    'tap:i18n@1.4.1',
    'tap:i18n-db@0.4.0',
    'aldeed:collection2@2.3.2'
  ], both);

  api.addFiles('ansyg:tap-i18n-schema.js', both);
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
