import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { parseDateTime } from '@nsf/datetime-helpers';
import moment from 'moment';


module('Unit | Utility | parseDateTime()', function(hooks) {
	setupTest(hooks);


	function hrsToMs(hours: number) {
		return hours * 60 * 60 * 1000;
	}


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


	test('it accepts a String', function(assert) {
		assert.strictEqual(
			new Date(1986, 9, 25).getTime(),
			parseDateTime('1986-10-25')?.getTime(),
			'YYYY-MM-DD'
		);

		assert.strictEqual(
			new Date(1986, 9, 25).getTime(),
			parseDateTime('10/25/1986')?.getTime(),
			'MM/DD/YYYY'
		);

		assert.strictEqual(
			new Date(1986, 9, 25, 10, 45, 0, 123).getTime(),
			parseDateTime('1986-10-25 10:45:00.123')?.getTime(),
			'YYYY-MM-DD[T]HH:mm:ss.SSS'
		);

		assert.strictEqual(
			new Date(1986, 9, 25, 10, 45, 0).getTime(),
			parseDateTime('10/25/1986 10:45 AM')?.getTime(),
			'MM/DD/YYYY h:mm A'
		);

		assert.strictEqual(
			new Date('1986-10-25T10:45:00+05:00')?.getTime(),
			parseDateTime('1986-10-25T10:45:00+05:00')?.getTime(),
			'YYYY-MM-DD[T]HH:mm:ssZZ'
		);

		assert.strictEqual(
			new Date('1986-10-25T10:45:00.123+05:00')?.getTime(),
			parseDateTime('1986-10-25T10:45:00.123+05:00')?.getTime(),
			'YYYY-MM-DD[T]HH:mm:ss.SSSZZ'
		);
	});


	test('it will use a custom format', function(assert) {
		assert.strictEqual(
			new Date(1986, 9, 25).getTime(),
			parseDateTime('25 Oct, 86', { format: 'D MMM, YY' })?.getTime()
		);
	});


	test('it accepts an arbitrary timezone offset', function(assert) {
		const targetDate = new Date('1986-10-25T10:45:00.000Z');

		// Match against a format mask that doesn't include "ZZ"
		let actualDate = parseDateTime('1986-10-25T10:45:00', { tz: '-05:00' });
		let difference = Math.abs(targetDate.getTime() - (actualDate?.getTime() ?? 0));

		assert.strictEqual(difference, hrsToMs(5));


		// Partial match leaving unused formatting token "ZZ"
		actualDate = parseDateTime('Oct 25, 1986 10:45:00.000', {
			tz: '-05:00',
			format: 'MMM DD, YYYY HH:mm:ss.SSS ZZ',
			exactFormatMatch: true,
		});

		difference = Math.abs(targetDate.getTime() - (actualDate?.getTime() ?? 0));

		assert.strictEqual(difference, hrsToMs(5));


		// It doesn't explode when trying to do this with something it can't
		assert.strictEqual(null, parseDateTime('abcd', { tz: '-05:00' }));
	});


	test('it can treat ambiguous inputs as UTC', function(assert) {
		const targetDate = new Date('1986-10-25T10:45:00.000-04:00');
		const actualDate = parseDateTime('1986-10-25T10:45:00', { utc: true });
		const difference = Math.abs(targetDate.getTime() - (actualDate?.getTime() ?? 0));

		assert.strictEqual(difference, hrsToMs(4));
	});
});
