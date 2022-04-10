import { helper as buildHelper } from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';


/**
 * An Ember template helper to generate a unique ID for an object using Ember's `guidFor()`
 * utility method. An optional suffix can also be provided so that the same object
 * can be used to derive multiple unique IDs.
 *
 * ```handlebars
 * {{! A globally unique ID for @someValue }}
 * {{guid-for @someValue}}
 *
 * {{! The GUID of @someValue suffixed with "-foo" }}
 * {{guid-for @someValue "foo"}}
 * ```
 *
 * @function guid-for
 * @category helpers
 */
export default buildHelper(function guidForHelperFunction([target, suffix]: [any, string | undefined]) {
	const guid = guidFor(target);
	return typeof suffix === 'string' ? `${guid}-${suffix}` : guid;
});
