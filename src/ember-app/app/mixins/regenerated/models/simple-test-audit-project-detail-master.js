import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  field1: DS.attr('number'),
  field2: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string')
});

export let ValidationRules = {
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
  field2: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.field2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.simple-test-audit-project-detail-master.validations.editor.__caption__',
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
