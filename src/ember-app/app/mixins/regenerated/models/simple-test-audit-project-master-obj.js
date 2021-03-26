import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  masterField: DS.attr('number'),
  editTime: DS.attr('date'),
  masterName: DS.attr('string'),
  creator: DS.attr('string'),
  editor: DS.attr('string'),
  createTime: DS.attr('date'),
  masterDetail: DS.hasMany('simple-test-audit-project-master-detail', { inverse: 'masterObj', async: false })
});

export let ValidationRules = {
  masterField: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.masterField.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  masterName: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.masterName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  masterDetail: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.masterDetail.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'simple-test-audit-project-master-obj', {
    masterName: attr('Master name', { index: 0 }),
    masterField: attr('Master field', { index: 1 }),
    masterDetail: hasMany('simple-test-audit-project-master-detail', 'Master detail', {
      field: attr('Field', { index: 0 })
    })
  });

  modelClass.defineProjection('MasterObjE', 'simple-test-audit-project-master-obj', {
    masterName: attr('', { index: 0 }),
    masterField: attr('', { index: 1 }),
    masterDetail: hasMany('simple-test-audit-project-master-detail', '', {
      field: attr('', { index: 0 }),
      masterObj: belongsTo('simple-test-audit-project-master-obj', '', {

      }, { index: 1, hidden: true })
    })
  });

  modelClass.defineProjection('MasterObjL', 'simple-test-audit-project-master-obj', {
    masterName: attr('', { index: 0 }),
    masterField: attr('', { index: 1 })
  });
};
