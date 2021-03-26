import { Serializer as NewClass1Serializer } from
  '../mixins/regenerated/serializers/simple-test-audit-project-new-class1';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(NewClass1Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
