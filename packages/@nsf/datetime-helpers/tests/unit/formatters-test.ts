import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import {
	toMiddleEndianDateString,
	toMiddleEndianTimeString,
	toMiddleEndianDateTimeString,
	toBigEndianDateString,
	toBigEndianTimeString,
	toBigEndianDateTimeString,
} from '@nsf/datetime-helpers';


module('Unit | Utility | formatters', function(hooks) {
	setupTest(hooks);


	test('toMiddleEndianDateString()', function(assert) {
		const realValue     = toMiddleEndianDateString(new Date(1986, 9, 25, 10, 45, 0));
		const defaultValue  = toMiddleEndianDateString('abcd');
		const customDefault = toMiddleEndianDateString('abcd', 'N/A');

		assert.strictEqual(realValue,     '10/25/1986');
		assert.strictEqual(defaultValue,  'None');
		assert.strictEqual(customDefault, 'N/A');
	});


	test('toMiddleEndianTimeString()', function(assert) {
		const realValue     = toMiddleEndianTimeString(new Date(1986, 9, 25, 10, 45, 0));
		const defaultValue  = toMiddleEndianTimeString('abcd');
		const customDefault = toMiddleEndianTimeString('abcd', 'N/A');

		assert.strictEqual(realValue,     '10:45 AM');
		assert.strictEqual(defaultValue,  'None');
		assert.strictEqual(customDefault, 'N/A');
	});


	test('toMiddleEndianDateTimeString()', function(assert) {
		const realValue     = toMiddleEndianDateTimeString(new Date(1986, 9, 25, 10, 45, 0));
		const defaultValue  = toMiddleEndianDateTimeString('abcd');
		const customDefault = toMiddleEndianDateTimeString('abcd', 'N/A');

		assert.strictEqual(realValue,     '10/25/1986 10:45 AM');
		assert.strictEqual(defaultValue,  'None');
		assert.strictEqual(customDefault, 'N/A');
	});


	test('toBigEndianDateString()', function(assert) {
		const realValue     = toBigEndianDateString(new Date(1986, 9, 25, 10, 45, 0));
		const defaultValue  = toBigEndianDateString('abcd');
		const customDefault = toBigEndianDateString('abcd', 'N/A');

		assert.strictEqual(realValue,     '1986-10-25');
		assert.strictEqual(defaultValue,  'None');
		assert.strictEqual(customDefault, 'N/A');
	});


	test('toBigEndianTimeString()', function(assert) {
		const realValue     = toBigEndianTimeString(new Date(1986, 9, 25, 10, 45, 0));
		const defaultValue  = toBigEndianTimeString('abcd');
		const customDefault = toBigEndianTimeString('abcd', 'N/A');

		assert.strictEqual(realValue,     '10:45:00.000');
		assert.strictEqual(defaultValue,  'None');
		assert.strictEqual(customDefault, 'N/A');
	});


	test('toBigEndianDateTimeString()', function(assert) {
		const realValue     = toBigEndianDateTimeString(new Date(1986, 9, 25, 10, 45, 0));
		const defaultValue  = toBigEndianDateTimeString('abcd');
		const customDefault = toBigEndianDateTimeString('abcd', 'N/A');

		assert.strictEqual(realValue,     '1986-10-25T10:45:00.000');
		assert.strictEqual(defaultValue,  'None');
		assert.strictEqual(customDefault, 'N/A');
	});
});
