import { Serializer as DetailMasterSerializer } from
  '../mixins/regenerated/serializers/simple-test-audit-project-detail-master';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DetailMasterSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
