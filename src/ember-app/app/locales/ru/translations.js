import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Simple test audit project',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Simple test audit project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Simple test audit project',
          title: 'Simple test audit project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'simple-test-audit-project': {
          caption: 'SimpleTestAuditProject',
          title: 'SimpleTestAuditProject',
          'simple-test-audit-project-main-obj-l': {
            caption: 'Main obj',
            title: ''
          },
          'simple-test-audit-project-master-obj-l': {
            caption: 'Master obj',
            title: ''
          },
          'simple-test-audit-project-detail-master-l': {
            caption: 'DetailMasterL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
