import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { intersection } from '@nsf-open/ember-general-utils';


module('Unit | Utility | arrays', function(hooks) {
	setupTest(hooks);


	test('intersection()', function(assert) {
		// @ts-expect-error - purposefully providing an invalid argument
		assert.deepEqual(intersection(null, null), []);
		// @ts-expect-error - purposefully providing an invalid argument
		assert.deepEqual(intersection([], null), []);
		// @ts-expect-error - purposefully providing an invalid argument
		assert.deepEqual(intersection(null, []), []);

		assert.deepEqual(intersection([], []), []);
		assert.deepEqual(intersection(['1', '2'], ['3', '4']), []);
		assert.deepEqual(intersection(['1', '2'], ['2', '3']), ['2']);

		assert.deepEqual(intersection(['1', '2', '4'], ['4', '1']), ['1', '4']);
		assert.deepEqual(intersection(['4', '2', '1'], ['4', '1']), ['4', '1']);
	});
});
