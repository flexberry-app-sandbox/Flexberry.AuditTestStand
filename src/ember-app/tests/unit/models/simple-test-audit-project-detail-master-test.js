import { moduleForModel, test } from 'ember-qunit';

moduleForModel('simple-test-audit-project-detail-master', 'Unit | Model | simple-test-audit-project-detail-master', {
  // Specify the other units that are required for this test.
  needs: [
    'model:simple-test-audit-project-detail-master',
    'model:simple-test-audit-project-detail-obj',
    'model:simple-test-audit-project-main-obj',
    'model:simple-test-audit-project-master-detail',
    'model:simple-test-audit-project-master-obj',
    'model:simple-test-audit-project-new-class1',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
