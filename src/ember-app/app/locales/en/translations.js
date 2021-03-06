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

    login: {
      caption: 'Login',
      logout: 'Logout',
      back: 'Back',
      login: 'Login',
      password: 'Password',
      'you-logged-as': 'You logged as: "{{login}}".',
      errors: {
        'empty-login': 'Login can not be empty.',
        'empty-password': 'Password can not be empty.',
        'server-error': 'Not response from server.',
        'incorrect-auth-data': 'Wrong login or password.',
        'login-please': 'Please, login.',
        'unknown-error': 'Oh, something went wrong...',
      },
    },

    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l': {
      caption: 'Audit entities'
    },

    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e': {
      caption: 'Audit entity',
      'objectPrimaryKey-caption': 'Object Primary Key',
      'operationTime-caption': 'Operation time',
      'operationType-caption': 'Operation type',
      'executionResult-caption': 'Execution result',
      'source-caption': 'Source',
      'createTime-caption': 'Create time',
      'creator-caption': 'Creator',
      'editTime-caption': 'Edit time',
      'editor-caption': 'Editor',
      'objectType-caption': 'Object type',
      'user-caption': 'User',
      'auditFields-caption': 'Audit fields'
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
        },
        'audit-forms': {
          caption: 'Audit',
          title: 'Audit',
          'audit-forms-data': {
            caption: 'Data audit',
            title: ''
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
    'simple-test-audit-project-master-obj-e': SimpleTestAuditProjectMasterObjEForm,
  },

});

export default translations;
