import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('master', 'Masters');
inflector.irregular('detail', 'Details');
inflector.irregular('obj', 'Objs');

export default {};
