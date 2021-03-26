import ListFormRoute from 'ember-flexberry-security/routes/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l';
import { computed } from '@ember/object';

export default ListFormRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.set('readonly', true);
  },

  /*developerUserSettings: computed(function() {
    return {
      ICSSoftSTORMNETBusinessAuditObjectsAuditEntityL: {
        'DEFAULT': {
          'columnWidths': [{ 'propName': 'OlvRowToolbar', 'fixed': true, 'width': 90 }, { 'propName': 'OlvRowMenu', 'fixed': true, 'width': 68 }]
        }
      }
    }
  }),*/
  /*developerUserSettings: undefined,
  defaultDeveloperUserSettings: undefined,*/
  queryParams: {
    page: { refreshModel: true },
    perPage: { refreshModel: true },
  },
});
