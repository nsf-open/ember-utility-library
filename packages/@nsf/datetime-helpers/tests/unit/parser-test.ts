import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { parseDateTime } from '@nsf/datetime-helpers';
import moment from 'moment';


module('Unit | Utility | parseDateTime()', function(hooks) {
	setupTest(hooks);


	// function getDate() {
	// 	return new Date('1986-10-25T10:45:00+05:00');
	// }


	test('it ignores an empty string', function(assert) {
		assert.strictEqual(null, parseDateTime(''));
		assert.strictEqual(null, parseDateTime('   '));
	});


	test('it ignores a non-parsable string', function(assert) {
		assert.strictEqual(null, parseDateTime('abcd'));
	});


	test('it accepts a Date', function(assert) {
		const date = new Date();
		assert.strictEqual(date, parseDateTime(date));
	});


	test('it accepts a Moment', function(assert) {
		const date   = new Date();
		const parsed = parseDateTime(moment(date));

		assert.strictEqual(date.getTime(), parsed?.getTime());
	});


	test('it accepts a Number', function(assert) {
		const epochTime = new Date().getTime();
		assert.strictEqual(epochTime, parseDateTime(epochTime)?.getTime());
	});


	// test('it accepts a String', function(assert) {
	// 	const dateString = '1986-10-25T10:45:00+05:00';
	//
	// 	assert
	// });
});
