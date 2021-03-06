import { moduleForModel, test } from 'ember-qunit';

moduleForModel('simple-test-audit-project-detail-master', 'Unit | Serializer | simple-test-audit-project-detail-master', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:simple-test-audit-project-detail-master',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
