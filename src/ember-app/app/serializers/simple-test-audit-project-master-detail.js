import { Serializer as MasterDetailSerializer } from
  '../mixins/regenerated/serializers/simple-test-audit-project-master-detail';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MasterDetailSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
