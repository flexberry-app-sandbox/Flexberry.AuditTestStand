import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  masterName: DS.attr('string'),
  masterField: DS.attr('number'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  masterDetail: DS.hasMany('simple-test-audit-project-master-detail', { inverse: 'masterObj', async: false })
});

export let ValidationRules = {
  masterName: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.masterName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  masterField: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.masterField.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.simple-test-audit-project-master-obj.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
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
