import { Serializer as DetailObjSerializer } from
  '../mixins/regenerated/serializers/simple-test-audit-project-detail-obj';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DetailObjSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
