import { moduleForModel, test } from 'ember-qunit';

moduleForModel('simple-test-audit-project-detail-obj', 'Unit | Serializer | simple-test-audit-project-detail-obj', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:simple-test-audit-project-detail-obj',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:simple-test-audit-project-detail-master',
    'model:simple-test-audit-project-detail-obj',
    'model:simple-test-audit-project-main-obj',
    'model:simple-test-audit-project-master-detail',
    'model:simple-test-audit-project-master-obj',
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
