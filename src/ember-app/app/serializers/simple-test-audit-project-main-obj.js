import { Serializer as MainObjSerializer } from
  '../mixins/regenerated/serializers/simple-test-audit-project-main-obj';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MainObjSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
