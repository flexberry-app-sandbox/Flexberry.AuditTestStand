import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  field: DS.attr('number'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  masterObj: DS.belongsTo('simple-test-audit-project-master-obj', { inverse: null, async: false }),
  hierarchy: DS.belongsTo('simple-test-audit-project-main-obj', { inverse: null, async: false }),
  detailObj: DS.hasMany('simple-test-audit-project-detail-obj', { inverse: 'mainObj', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.field.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  masterObj: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.masterObj.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  hierarchy: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.hierarchy.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  detailObj: {
    descriptionKey: 'models.simple-test-audit-project-main-obj.validations.detailObj.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'simple-test-audit-project-main-obj', {
    name: attr('Name', { index: 0 }),
    field: attr('Field', { index: 1 }),
    masterObj: belongsTo('simple-test-audit-project-master-obj', 'Master obj', {
      masterName: attr('Master name', { index: 3 })
    }, { index: 2 }),
    hierarchy: belongsTo('simple-test-audit-project-main-obj', 'Hierarchy', {
      name: attr('Name', { index: 5 })
    }, { index: 4 }),
    detailObj: hasMany('simple-test-audit-project-detail-obj', 'Detail obj', {
      detailName: attr('Detail name', { index: 0 }),
      detailField: attr('Detail field', { index: 1 }),
      mainObj: belongsTo('simple-test-audit-project-main-obj', '', {
        name: attr('', { index: 2 }),
        field: attr('', { index: 3 })
      }, { index: -1, hidden: true }),
      createTime: attr('', { index: 4 }),
      creator: attr('', { index: 5 }),
      editTime: attr('', { index: 6 }),
      editor: attr('', { index: 7 })
    })
  });

  modelClass.defineProjection('MainObjE', 'simple-test-audit-project-main-obj', {
    name: attr('', { index: 0 }),
    field: attr('', { index: 1 }),
    masterObj: belongsTo('simple-test-audit-project-master-obj', '', {
      masterName: attr('', { index: 3 }),
      masterField: attr('', { index: 4 })
    }, { index: 2 }),
    hierarchy: belongsTo('simple-test-audit-project-main-obj', '', {
      name: attr('', { index: 6 })
    }, { index: 5 }),
    detailObj: hasMany('simple-test-audit-project-detail-obj', '', {
      detailName: attr('', { index: 0 }),
      detailField: attr('', { index: 1 }),
      mainObj: belongsTo('simple-test-audit-project-main-obj', '', {

      }, { index: 2, hidden: true })
    })
  });

  modelClass.defineProjection('MainObjL', 'simple-test-audit-project-main-obj', {
    name: attr('', { index: 0 }),
    field: attr('', { index: 1 })
  });
};
