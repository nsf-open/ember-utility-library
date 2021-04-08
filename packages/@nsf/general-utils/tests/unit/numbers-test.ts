import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { isNumeric, isInteger } from '@nsf/general-utils';


module('Unit | Utility | numbers', function(hooks) {
	setupTest(hooks);


	test('isNumeric()', function(assert) {
		assert.strictEqual(isNumeric(null), false);
		assert.strictEqual(isNumeric(Number.POSITIVE_INFINITY), false);
		assert.strictEqual(isNumeric(NaN), false);
		assert.strictEqual(isNumeric('a'), false);

		assert.strictEqual(isNumeric(123), true);
		assert.strictEqual(isNumeric('1e2'), true);
	});


	test('isInteger()', function(assert) {
		assert.strictEqual(isInteger(null), false);
		assert.strictEqual(isInteger(Number.POSITIVE_INFINITY), false);
		assert.strictEqual(isInteger(NaN), false);
		assert.strictEqual(isInteger('a'), false);
		assert.strictEqual(isInteger('1.5'), false);
		assert.strictEqual(isInteger(1.5), false);
		assert.strictEqual(isInteger(1), true);
	});
});
