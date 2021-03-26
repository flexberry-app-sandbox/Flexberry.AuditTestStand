import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as MainObjMixin
} from '../mixins/regenerated/models/simple-test-audit-project-main-obj';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, MainObjMixin, Validations, {
  init() {
    this._super(...arguments);
    this.on('preSave', this._modelPreSave);
  },

  _modelPreSave(options) {
    options.promises = [];
    /*if (this.get('agent.name') !== this.get('fIO')) {
      this.get('agent').set('name', this.get('fIO'));
    }

    if (this.get('agent.isNew') || this.get('agent.hasDirtyAttributes')) {
      options.promises.push(this.get('agent').save());
    }*/
  },

  willDestroy() {
    this.off('preSave', this._modelPreSave);
  }
});

defineProjections(Model);

export default Model;
