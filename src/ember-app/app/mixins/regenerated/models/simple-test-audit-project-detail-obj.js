import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  detailName: DS.attr('string'),
  detailField: DS.attr('number'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  mainObj: DS.belongsTo('simple-test-audit-project-main-obj', { inverse: 'detailObj', async: false })
});

export let ValidationRules = {
  detailName: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.detailName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  detailField: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.detailField.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  createTime: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  mainObj: {
    descriptionKey: 'models.simple-test-audit-project-detail-obj.validations.mainObj.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'simple-test-audit-project-detail-obj', {
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
  });

  modelClass.defineProjection('DetailObjD', 'simple-test-audit-project-detail-obj', {
    detailName: attr('', { index: 0 }),
    detailField: attr('', { index: 1 }),
    mainObj: belongsTo('simple-test-audit-project-main-obj', '', {

    }, { index: 2, hidden: true })
  });

  modelClass.defineProjection('DetailObjE', 'simple-test-audit-project-detail-obj', {
    detailName: attr('Detail name', { index: 0 }),
    detailField: attr('Detail field', { index: 1 })
  });

  modelClass.defineProjection('DetailObjL', 'simple-test-audit-project-detail-obj', {
    detailName: attr('', { index: 0 }),
    detailField: attr('', { index: 1 })
  });
};
