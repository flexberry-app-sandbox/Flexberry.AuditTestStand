import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import config from '../config/environment';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import { translationMacro as t } from 'ember-i18n';

export default Controller.extend({

  /**
  */
  login: '',

  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.simple-test-audit-project.caption'),
          title: i18n.t('forms.application.sitemap.simple-test-audit-project.title'),
          children: [{
            link: 'simple-test-audit-project-main-obj-l',
            caption: i18n.t('forms.application.sitemap.simple-test-audit-project.simple-test-audit-project-main-obj-l.caption'),
            title: i18n.t('forms.application.sitemap.simple-test-audit-project.simple-test-audit-project-main-obj-l.title'),
            children: null
          }, {
            link: 'simple-test-audit-project-master-obj-l',
            caption: i18n.t('forms.application.sitemap.simple-test-audit-project.simple-test-audit-project-master-obj-l.caption'),
            title: i18n.t('forms.application.sitemap.simple-test-audit-project.simple-test-audit-project-master-obj-l.title'),
            children: null
          }, {
            link: 'simple-test-audit-project-detail-master-l',
            caption: i18n.t('forms.application.sitemap.simple-test-audit-project.simple-test-audit-project-detail-master-l.caption'),
            title: i18n.t('forms.application.sitemap.simple-test-audit-project.simple-test-audit-project-detail-master-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.audit-forms.caption'),
          title: i18n.t('forms.application.sitemap.audit-forms.title'),
          children: [{
            link: 'simple-test-audit-project-audit-objects-audit-entity-l',
            caption: i18n.t('forms.application.sitemap.audit-forms.audit-forms-data.caption'),
            title: i18n.t('forms.application.sitemap.audit-forms.audit-forms-data.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    },

    /**
    */
    login() {
      let _this = this;
      let login = _this.get('loginInput');
      let password = _this.get('password');
      if (login && password) {
        _this._resetLoginErrors();
        _this.set('tryToLogin', true);
        $.ajax({
          type: 'GET',
          xhrFields: { withCredentials: true },
          url: `${config.APP.backendUrls.api}/Login(login='${login}',password='${password}')`,
          success(result) {
            _this.set('tryToLogin', false);
            if (result.value === true) {
              _this._resetLoginData(login);
              _this.transitionToRoute('index');
            } else {
              _this.set('errorMessage', t('forms.login.errors.incorrect-auth-data'));
            }
          },
          error() {
            _this.set('tryToLogin', false);
            _this.set('errorMessage', t('forms.login.errors.server-error'));
          },
        });
      } else {
        if (!login) {
          _this.set('emptyLogin', t('forms.login.errors.empty-login'));
        }

        if (!password) {
          _this.set('emptyPassword', t('forms.login.errors.empty-password'));
        }
      }
    },

    /**
    */
    logout() {
      let _this = this;
      $.ajax({
        type: 'GET',
        xhrFields: { withCredentials: true },
        url: `${config.APP.backendUrls.api}/Logout()`,
        success(result) {
          if (result.value === true) {
            _this.set('login', '');
          } else {
            _this.set('errorMessage', t('forms.login.errors.unknown-error'));
          }

          _this.transitionToRoute('index');
        },
        error() {
          _this.set('errorMessage', t('forms.login.errors.server-error'));
          _this.transitionToRoute('index');
        },
      });
    },

    /**
    */
    goToLoginForm() {
      this.transitionToRoute('login');
    },

    /**
    */
    closeLoginForm() {
      this._resetLoginErrors();
      this.transitionToRoute('index');
    } 
  },

  /**
    */
   _resetLoginErrors() {
    this.setProperties({
      errorMessage: null,
      emptyLogin: null,
      emptyPassword: null,
    });
  },

  /**
  */
  _resetLoginData(login) {
    this.setProperties({
      login: login,
      loginInput: null,
      password: null,
    });
  }
});
