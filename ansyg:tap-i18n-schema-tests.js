'use strict';

var Posts = new TAPi18n.Collection('posts', {
    languages: [ 'ru', 'en' ],
    base_language: 'ru'
  }),
  schema = {
    position: {
      label: 'Postion',
      type: Number
    },
    name: {
      label: 'Name',
      type: String,
      max: 80,
      i18n: true
    },
    content: {
      label: 'Description',
      type: String,
      max: 80,
      i18n: true
    }
  };

Tinytest.add('api from tap:i18n-db shouldn\'t change', function (test) {
  test.isNotUndefined(Posts.find);
  test.isNotUndefined(Posts.insertTranslations);
  test.isNotUndefined(Posts.updateTranslations);
  test.equal(Posts._languages, [ 'ru', 'en' ]);
  test.equal(Posts._base_language, 'ru');
});

Tinytest.add('it should add attachI18nSchema to TAPi18n.Collection', function (test) {
  test.isNotUndefined(Posts.attachI18nSchema);
  Posts.attachI18nSchema(schema);
  test.notEqual(Posts.simpleSchema()._schema, schema);
  test.equal(JSON.toString(Posts.simpleSchema()._schema), JSON.toString(_.extend({}, schema, {
    'i18n.en.name': {
      label: 'Name',
      type: String,
      max: 80,
      i18n: true,
      optional: true
    },
    'i18n.en.content': {
      label: 'Description',
      type: String,
      max: 80,
      i18n: true,
      optional: true
    },
    i18n: {
      optional: true
    },
    'i18n.en': {
      optional: true
    }
  })));
});
