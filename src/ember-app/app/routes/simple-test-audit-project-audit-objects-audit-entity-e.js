import EditFormRoute from 'ember-flexberry-security/routes/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e';

export default EditFormRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.set('readonly', true);
  }
});
