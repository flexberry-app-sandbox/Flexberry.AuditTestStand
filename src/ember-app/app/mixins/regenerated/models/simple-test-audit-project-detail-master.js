import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  editor: DS.attr('string'),
  creator: DS.attr('string'),
  name: DS.attr('string'),
  field1: DS.attr('number'),
  createTime: DS.attr('date'),
  editTime: DS.attr('date'),
  field2: DS.attr('string')
});

export let ValidationRules = {
  editor: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field1: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.field1.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  field2: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.field2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'simple-test-audit-project-detail-master', {
    name: attr('Name', { index: 0 }),
    field1: attr('Field1', { index: 1 }),
    field2: attr('Field2', { index: 2 })
  });

  modelClass.defineProjection('DetailMasterE', 'simple-test-audit-project-detail-master', {
    name: attr('', { index: 0 }),
    field1: attr('', { index: 1 }),
    field2: attr('', { index: 2 })
  });

  modelClass.defineProjection('DetailMasterL', 'simple-test-audit-project-detail-master', {
    name: attr('', { index: 0 }),
    field1: attr('', { index: 1 }),
    field2: attr('', { index: 2 })
  });
};
