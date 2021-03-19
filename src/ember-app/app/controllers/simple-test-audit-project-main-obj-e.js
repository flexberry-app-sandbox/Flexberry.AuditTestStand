import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'simple-test-audit-project-main-obj-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'simple-test-audit-project-detail-obj+detailMaster':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: false,
            relationName: 'detailMaster',
            projection: 'DetailMasterL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
