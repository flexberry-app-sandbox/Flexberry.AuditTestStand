import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  field: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  masterObj: DS.belongsTo('simple-test-audit-project-master-obj', { inverse: 'masterDetail', async: false })
});

export let ValidationRules = {
  field: {
    descriptionKey: 'models.simple-test-audit-project-master-detail.validations.field.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-master-detail.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-master-detail.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-master-detail.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.simple-test-audit-project-master-detail.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  masterObj: {
    descriptionKey: 'models.simple-test-audit-project-master-detail.validations.masterObj.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'simple-test-audit-project-master-detail', {
    field: attr('Field', { index: 0 }),
    masterObj: belongsTo('simple-test-audit-project-master-obj', '', {
      masterName: attr('', { index: 1 }),
      masterField: attr('', { index: 2 })
    }, { index: -1, hidden: true }),
    createTime: attr('', { index: 3 }),
    creator: attr('', { index: 4 }),
    editTime: attr('', { index: 5 }),
    editor: attr('', { index: 6 })
  });

  modelClass.defineProjection('MasterDetailD', 'simple-test-audit-project-master-detail', {
    field: attr('', { index: 0 }),
    masterObj: belongsTo('simple-test-audit-project-master-obj', '', {

    }, { index: 1, hidden: true })
  });
};
