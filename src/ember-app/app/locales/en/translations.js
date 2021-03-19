import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import SimpleTestAuditProjectDetailMasterLForm from './forms/simple-test-audit-project-detail-master-l';
import SimpleTestAuditProjectDetailObjLForm from './forms/simple-test-audit-project-detail-obj-l';
import SimpleTestAuditProjectMainObjLForm from './forms/simple-test-audit-project-main-obj-l';
import SimpleTestAuditProjectMasterObjLForm from './forms/simple-test-audit-project-master-obj-l';
import SimpleTestAuditProjectDetailMasterEForm from './forms/simple-test-audit-project-detail-master-e';
import SimpleTestAuditProjectDetailObjEForm from './forms/simple-test-audit-project-detail-obj-e';
import SimpleTestAuditProjectMainObjEForm from './forms/simple-test-audit-project-main-obj-e';
import SimpleTestAuditProjectMasterObjEForm from './forms/simple-test-audit-project-master-obj-e';
import SimpleTestAuditProjectDetailMasterModel from './models/simple-test-audit-project-detail-master';
import SimpleTestAuditProjectDetailObjModel from './models/simple-test-audit-project-detail-obj';
import SimpleTestAuditProjectMainObjModel from './models/simple-test-audit-project-main-obj';
import SimpleTestAuditProjectMasterDetailModel from './models/simple-test-audit-project-master-detail';
import SimpleTestAuditProjectMasterObjModel from './models/simple-test-audit-project-master-obj';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'simple-test-audit-project-detail-master': SimpleTestAuditProjectDetailMasterModel,
    'simple-test-audit-project-detail-obj': SimpleTestAuditProjectDetailObjModel,
    'simple-test-audit-project-main-obj': SimpleTestAuditProjectMainObjModel,
    'simple-test-audit-project-master-detail': SimpleTestAuditProjectMasterDetailModel,
    'simple-test-audit-project-master-obj': SimpleTestAuditProjectMasterObjModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'simple-test-audit-project': {
          caption: 'simple-test-audit-project',
          title: 'simple-test-audit-project',
          'simple-test-audit-project-main-obj-l': {
            caption: 'simple-test-audit-project-main-obj-l',
            title: 'simple-test-audit-project-main-obj-l'
          },
          'simple-test-audit-project-master-obj-l': {
            caption: 'simple-test-audit-project-master-obj-l',
            title: 'simple-test-audit-project-master-obj-l'
          },
          'simple-test-audit-project-detail-master-l': {
            caption: 'simple-test-audit-project-detail-master-l',
            title: 'simple-test-audit-project-detail-master-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'simple-test-audit-project-detail-master-l': SimpleTestAuditProjectDetailMasterLForm,
    'simple-test-audit-project-detail-obj-l': SimpleTestAuditProjectDetailObjLForm,
    'simple-test-audit-project-main-obj-l': SimpleTestAuditProjectMainObjLForm,
    'simple-test-audit-project-master-obj-l': SimpleTestAuditProjectMasterObjLForm,
    'simple-test-audit-project-detail-master-e': SimpleTestAuditProjectDetailMasterEForm,
    'simple-test-audit-project-detail-obj-e': SimpleTestAuditProjectDetailObjEForm,
    'simple-test-audit-project-main-obj-e': SimpleTestAuditProjectMainObjEForm,
    'simple-test-audit-project-master-obj-e': SimpleTestAuditProjectMasterObjEForm
  },

});

export default translations;
