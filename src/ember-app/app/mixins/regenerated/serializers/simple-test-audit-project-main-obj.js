import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      hierarchy: { serialize: 'odata-id', deserialize: 'records' },
      masterObj: { serialize: 'odata-id', deserialize: 'records' },
      currentDetailObj: { serialize: 'odata-id', deserialize: 'records' },
      detailObj: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
