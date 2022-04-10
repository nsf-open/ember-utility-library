import { helper as buildHelper } from '@ember/component/helper';
import { isPrimitive } from '../utils/objects';

/**
 * An Ember template helper to test whether the argument is one of
 * Javascript's primitive types.
 *
 * ```handlebars
 * {{#if (is-primitive @someValue)}}
 *   String, number, boolean logic
 * {{else}}
 *   Object, array logic
 * {{}}
 * ```
 *
 * @function is-primitive
 * @category helpers
 */
export default buildHelper(function isPrimitiveHelperFunction(args: any[]) {
	return isPrimitive(args[0]);
});
