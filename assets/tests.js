'use strict';

define('ember-app/tests/acceptance/simple-test-audit-project-detail-master-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | simple test audit project detail master l');

  (0, _qunit.test)('testing /simple-test-audit-project-detail-master-l', function (assert) {
    var _this = this;

    visit('/simple-test-audit-project-detail-master-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/simple-test-audit-project-detail-obj-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | simple test audit project detail obj l');

  (0, _qunit.test)('testing /simple-test-audit-project-detail-obj-l', function (assert) {
    var _this = this;

    visit('/simple-test-audit-project-detail-obj-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/simple-test-audit-project-main-obj-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | simple test audit project main obj l');

  (0, _qunit.test)('testing /simple-test-audit-project-main-obj-l', function (assert) {
    var _this = this;

    visit('/simple-test-audit-project-main-obj-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/simple-test-audit-project-master-obj-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | simple test audit project master obj l');

  (0, _qunit.test)('testing /simple-test-audit-project-master-obj-l', function (assert) {
    var _this = this;

    visit('/simple-test-audit-project-master-obj-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-audit-objects-audit-entity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-audit-objects-audit-entity-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-audit-objects-audit-entity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-audit-objects-audit-entity-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-detail-master-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-detail-master-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-detail-master-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-detail-master-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-detail-master-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-detail-master-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-detail-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-detail-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-detail-obj-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-detail-obj-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-detail-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-detail-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-main-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-main-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-main-obj-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-main-obj-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-main-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-main-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-master-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-master-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-master-obj-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-master-obj-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/simple-test-audit-project-master-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/simple-test-audit-project-master-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-audit-objects-audit-entity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-audit-objects-audit-entity-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-audit-objects-audit-entity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-audit-objects-audit-entity-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-detail-master-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-detail-master-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-detail-master-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-detail-master-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-detail-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-detail-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-detail-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-detail-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-main-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-main-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-main-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-main-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-master-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-master-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/simple-test-audit-project-master-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/simple-test-audit-project-master-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/simple-test-audit-project-detail-master.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/simple-test-audit-project-detail-master.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/simple-test-audit-project-detail-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/simple-test-audit-project-detail-obj.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/simple-test-audit-project-main-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/simple-test-audit-project-main-obj.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/simple-test-audit-project-master-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/simple-test-audit-project-master-detail.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/simple-test-audit-project-master-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/simple-test-audit-project-master-obj.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/simple-test-audit-project-new-class1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/simple-test-audit-project-new-class1.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-audit-objects-audit-entity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-audit-objects-audit-entity-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-audit-objects-audit-entity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-audit-objects-audit-entity-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-detail-master-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-detail-master-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-detail-master-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-detail-master-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-detail-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-detail-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-detail-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-detail-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-main-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-main-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-main-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-main-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-master-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-master-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/simple-test-audit-project-master-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/simple-test-audit-project-master-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/simple-test-audit-project-detail-master.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/simple-test-audit-project-detail-master.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/simple-test-audit-project-detail-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/simple-test-audit-project-detail-obj.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/simple-test-audit-project-main-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/simple-test-audit-project-main-obj.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/simple-test-audit-project-master-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/simple-test-audit-project-master-detail.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/simple-test-audit-project-master-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/simple-test-audit-project-master-obj.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/simple-test-audit-project-new-class1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/simple-test-audit-project-new-class1.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/simple-test-audit-project-detail-master.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/simple-test-audit-project-detail-master.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/simple-test-audit-project-detail-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/simple-test-audit-project-detail-obj.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/simple-test-audit-project-main-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/simple-test-audit-project-main-obj.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/simple-test-audit-project-master-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/simple-test-audit-project-master-detail.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/simple-test-audit-project-master-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/simple-test-audit-project-master-obj.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/simple-test-audit-project-new-class1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/simple-test-audit-project-new-class1.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-detail-master-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-detail-master-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-detail-master.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-detail-master.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-detail-obj-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-detail-obj-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-detail-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-detail-obj.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-main-obj-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-main-obj-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-main-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-main-obj.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-master-detail-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-master-detail-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-master-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-master-detail.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-master-obj-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-master-obj-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-master-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-master-obj.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-new-class1-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-new-class1-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/simple-test-audit-project-new-class1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/simple-test-audit-project-new-class1.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/simple-test-audit-project-detail-master.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/simple-test-audit-project-detail-master.js should pass ESLint\n\n');
  });

  QUnit.test('models/simple-test-audit-project-detail-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/simple-test-audit-project-detail-obj.js should pass ESLint\n\n');
  });

  QUnit.test('models/simple-test-audit-project-main-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/simple-test-audit-project-main-obj.js should pass ESLint\n\n');
  });

  QUnit.test('models/simple-test-audit-project-master-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/simple-test-audit-project-master-detail.js should pass ESLint\n\n');
  });

  QUnit.test('models/simple-test-audit-project-master-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/simple-test-audit-project-master-obj.js should pass ESLint\n\n');
  });

  QUnit.test('models/simple-test-audit-project-new-class1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/simple-test-audit-project-new-class1.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-audit-objects-audit-entity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-audit-objects-audit-entity-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-audit-objects-audit-entity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/simple-test-audit-project-audit-objects-audit-entity-l.js should pass ESLint\n\n2:10 - \'computed\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/simple-test-audit-project-detail-master-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-detail-master-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-detail-master-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-detail-master-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-detail-master-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-detail-master-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-detail-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-detail-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-detail-obj-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-detail-obj-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-detail-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-detail-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-main-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-main-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-main-obj-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-main-obj-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-main-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-main-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-master-obj-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-master-obj-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-master-obj-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-master-obj-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simple-test-audit-project-master-obj-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simple-test-audit-project-master-obj-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-detail-master-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-detail-master-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-detail-master.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-detail-master.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-detail-obj-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-detail-obj-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-detail-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-detail-obj.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-main-obj-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-main-obj-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-main-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-main-obj.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-master-detail-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-master-detail-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-master-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-master-detail.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-master-obj-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-master-obj-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-master-obj.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-master-obj.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-new-class1-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-new-class1-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/simple-test-audit-project-new-class1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/simple-test-audit-project-new-class1.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/simple-test-audit-project-detail-master-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/simple-test-audit-project-detail-master-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/simple-test-audit-project-detail-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/simple-test-audit-project-detail-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/simple-test-audit-project-main-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/simple-test-audit-project-main-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/simple-test-audit-project-master-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/simple-test-audit-project-master-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-detail-master-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-detail-master-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-detail-master-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-detail-master-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-detail-obj-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-detail-obj-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-detail-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-detail-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-main-obj-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-main-obj-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-main-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-main-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-master-obj-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-master-obj-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/simple-test-audit-project-master-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/simple-test-audit-project-master-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/simple-test-audit-project-detail-master-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/simple-test-audit-project-detail-master-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/simple-test-audit-project-detail-obj-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/simple-test-audit-project-detail-obj-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/simple-test-audit-project-main-obj-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/simple-test-audit-project-main-obj-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/simple-test-audit-project-master-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/simple-test-audit-project-master-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/simple-test-audit-project-master-obj-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/simple-test-audit-project-master-obj-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/simple-test-audit-project-new-class1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/simple-test-audit-project-new-class1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-detail-master-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-detail-master-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-detail-master-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-detail-master-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-detail-obj-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-detail-obj-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-detail-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-detail-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-main-obj-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-main-obj-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-main-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-main-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-master-obj-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-master-obj-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simple-test-audit-project-master-obj-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simple-test-audit-project-master-obj-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/simple-test-audit-project-detail-master-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/simple-test-audit-project-detail-master-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/simple-test-audit-project-detail-obj-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/simple-test-audit-project-detail-obj-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/simple-test-audit-project-main-obj-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/simple-test-audit-project-main-obj-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/simple-test-audit-project-master-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/simple-test-audit-project-master-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/simple-test-audit-project-master-obj-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/simple-test-audit-project-master-obj-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/simple-test-audit-project-new-class1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/simple-test-audit-project-new-class1-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-detail-master-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-detail-master-e', 'Unit | Controller | simple-test-audit-project-detail-master-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-detail-master-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-detail-master-l', 'Unit | Controller | simple-test-audit-project-detail-master-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-detail-obj-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-detail-obj-e', 'Unit | Controller | simple-test-audit-project-detail-obj-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-detail-obj-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-detail-obj-l', 'Unit | Controller | simple-test-audit-project-detail-obj-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-main-obj-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-main-obj-e', 'Unit | Controller | simple-test-audit-project-main-obj-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-main-obj-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-main-obj-l', 'Unit | Controller | simple-test-audit-project-main-obj-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-master-obj-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-master-obj-e', 'Unit | Controller | simple-test-audit-project-master-obj-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/simple-test-audit-project-master-obj-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:simple-test-audit-project-master-obj-l', 'Unit | Controller | simple-test-audit-project-master-obj-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/simple-test-audit-project-detail-master-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-detail-master', 'Unit | Model | simple-test-audit-project-detail-master', {
    // Specify the other units that are required for this test.
    needs: ['model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/simple-test-audit-project-detail-obj-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-detail-obj', 'Unit | Model | simple-test-audit-project-detail-obj', {
    // Specify the other units that are required for this test.
    needs: ['model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/simple-test-audit-project-main-obj-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-main-obj', 'Unit | Model | simple-test-audit-project-main-obj', {
    // Specify the other units that are required for this test.
    needs: ['model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/simple-test-audit-project-master-detail-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-master-detail', 'Unit | Model | simple-test-audit-project-master-detail', {
    // Specify the other units that are required for this test.
    needs: ['model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/simple-test-audit-project-master-obj-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-master-obj', 'Unit | Model | simple-test-audit-project-master-obj', {
    // Specify the other units that are required for this test.
    needs: ['model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/simple-test-audit-project-new-class1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-new-class1', 'Unit | Model | simple-test-audit-project-new-class1', {
    // Specify the other units that are required for this test.
    needs: ['model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-detail-master-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-detail-master-e', 'Unit | Route | simple-test-audit-project-detail-master-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-detail-master-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-detail-master-l', 'Unit | Route | simple-test-audit-project-detail-master-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-detail-obj-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-detail-obj-e', 'Unit | Route | simple-test-audit-project-detail-obj-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-detail-obj-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-detail-obj-l', 'Unit | Route | simple-test-audit-project-detail-obj-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-main-obj-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-main-obj-e', 'Unit | Route | simple-test-audit-project-main-obj-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-main-obj-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-main-obj-l', 'Unit | Route | simple-test-audit-project-main-obj-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-master-obj-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-master-obj-e', 'Unit | Route | simple-test-audit-project-master-obj-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/simple-test-audit-project-master-obj-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simple-test-audit-project-master-obj-l', 'Unit | Route | simple-test-audit-project-master-obj-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/simple-test-audit-project-detail-master-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-detail-master', 'Unit | Serializer | simple-test-audit-project-detail-master', {
    // Specify the other units that are required for this test.
    needs: ['serializer:simple-test-audit-project-detail-master', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/simple-test-audit-project-detail-obj-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-detail-obj', 'Unit | Serializer | simple-test-audit-project-detail-obj', {
    // Specify the other units that are required for this test.
    needs: ['serializer:simple-test-audit-project-detail-obj', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/simple-test-audit-project-main-obj-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-main-obj', 'Unit | Serializer | simple-test-audit-project-main-obj', {
    // Specify the other units that are required for this test.
    needs: ['serializer:simple-test-audit-project-main-obj', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/simple-test-audit-project-master-detail-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-master-detail', 'Unit | Serializer | simple-test-audit-project-master-detail', {
    // Specify the other units that are required for this test.
    needs: ['serializer:simple-test-audit-project-master-detail', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/simple-test-audit-project-master-obj-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-master-obj', 'Unit | Serializer | simple-test-audit-project-master-obj', {
    // Specify the other units that are required for this test.
    needs: ['serializer:simple-test-audit-project-master-obj', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/simple-test-audit-project-new-class1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('simple-test-audit-project-new-class1', 'Unit | Serializer | simple-test-audit-project-new-class1', {
    // Specify the other units that are required for this test.
    needs: ['serializer:simple-test-audit-project-new-class1', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:simple-test-audit-project-detail-master', 'model:simple-test-audit-project-detail-obj', 'model:simple-test-audit-project-main-obj', 'model:simple-test-audit-project-master-detail', 'model:simple-test-audit-project-master-obj', 'model:simple-test-audit-project-new-class1', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
