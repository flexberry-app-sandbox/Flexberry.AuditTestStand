import { Serializer as MasterObjSerializer } from
  '../mixins/regenerated/serializers/simple-test-audit-project-master-obj';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MasterObjSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
