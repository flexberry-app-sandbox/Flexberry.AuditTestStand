import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {

  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',
    { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e/:id' });

  this.route('simple-test-audit-project-detail-master-l');
  this.route('simple-test-audit-project-detail-master-e',
  { path: 'simple-test-audit-project-detail-master-e/:id' });
  this.route('simple-test-audit-project-detail-master-e.new',
  { path: 'simple-test-audit-project-detail-master-e/new' });
  this.route('simple-test-audit-project-detail-obj-l');
  this.route('simple-test-audit-project-detail-obj-e',
  { path: 'simple-test-audit-project-detail-obj-e/:id' });
  this.route('simple-test-audit-project-detail-obj-e.new',
  { path: 'simple-test-audit-project-detail-obj-e/new' });
  this.route('simple-test-audit-project-main-obj-l');
  this.route('simple-test-audit-project-main-obj-e',
  { path: 'simple-test-audit-project-main-obj-e/:id' });
  this.route('simple-test-audit-project-main-obj-e.new',
  { path: 'simple-test-audit-project-main-obj-e/new' });
  this.route('simple-test-audit-project-master-obj-l');
  this.route('simple-test-audit-project-master-obj-e',
  { path: 'simple-test-audit-project-master-obj-e/:id' });
  this.route('simple-test-audit-project-master-obj-e.new',
  { path: 'simple-test-audit-project-master-obj-e/new' });
  this.route('login');
});

export default Router;
