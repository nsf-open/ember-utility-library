import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import {
	isObject,
	hasProperty,
	isPrimitive,
	isPromiseLike,
} from '@nsf-open/ember-general-utils';


module('Unit | Utility | objects', function(hooks) {
	setupTest(hooks);


	test('isObject()', function(assert) {
		assert.strictEqual(isObject(null), false);
		assert.strictEqual(isObject(undefined), false);
		assert.strictEqual(isObject(true), false);
		assert.strictEqual(isObject('1'), false);
		assert.strictEqual(isObject(1), false);
		assert.strictEqual(isObject([]), false);
		assert.strictEqual(isObject(new Map()), false);

		assert.strictEqual(isObject({}), true);
		assert.strictEqual(isObject(new class {}), true);
	});


	test('hasProperty()', function(assert) {
		assert.strictEqual(hasProperty(null, 'foo'), false);
		assert.strictEqual(hasProperty(undefined, 'foo'), false);
		assert.strictEqual(hasProperty({}, 'foo'), false);

		assert.strictEqual(hasProperty({ foo: '1' }, 'foo'), true);
		assert.strictEqual(hasProperty(new class { foo = 1; }, 'foo'), true);
	});


	test('isPrimitive()', function(assert) {
		assert.strictEqual(isPrimitive(null), true);
		assert.strictEqual(isPrimitive(undefined), true);
		assert.strictEqual(isPrimitive(''), true);
		assert.strictEqual(isPrimitive(1), true);
		assert.strictEqual(isPrimitive(true), true);
		assert.strictEqual(isPrimitive(Symbol()), true);
		assert.strictEqual(isPrimitive(1n), true); // Bigint

		assert.strictEqual(isPrimitive([]), false);
		assert.strictEqual(isPrimitive({}), false);
	});


	test('isPromiseLike()', function(assert) {
		assert.strictEqual(isPromiseLike(null), false);
		assert.strictEqual(isPromiseLike({}), false);
		assert.strictEqual(isPromiseLike([]), false);

		assert.strictEqual(isPromiseLike(Promise.resolve()), true);
		assert.strictEqual(isPromiseLike({ then() { /* noop */ } }), true);

		const testFn = function() { /* noop */ };
		testFn.then  = function() { /* noop */ };

		assert.strictEqual(isPromiseLike(testFn), true);
	});
});
