import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { set } from '@ember/object';
import {
	middleEndianDateString,
	middleEndianTimeString,
	middleEndianDateTimeString,
	bigEndianDateString,
} from '@nsf/datetime-helpers';


module('Unit | Utility | computed-macros', function(hooks) {
	setupTest(hooks);


	function addHoursToDate(date: Date | undefined, hours: number) {
		return date ? new Date(date.getTime() + (hours * 3600000)) : undefined;
	}

	class DateTestClass {
		public date?: Date = new Date(1986, 0, 1, 10, 45, 0);

		@middleEndianDateString('date')
		public middleEndianDate!: string;

		@middleEndianTimeString('date')
		public middleEndianTime!: string;

		@middleEndianDateTimeString('date')
		public middleEndianDateTime!: string;

		@bigEndianDateString('date')
		public bigEndianDate!: string;
	}


	test('@middleEndianDateString()', function(assert) {
		const testClass = new DateTestClass();
		assert.strictEqual(testClass.middleEndianDate, '01/01/1986');

		set(testClass, 'date', addHoursToDate(testClass.date, 24));
		assert.strictEqual(testClass.middleEndianDate, '01/02/1986');

		set(testClass, 'date', undefined);
		assert.strictEqual(testClass.middleEndianDate, 'None');
	});


	test('@middleEndianTimeString()', function(assert) {
		const testClass = new DateTestClass();
		assert.strictEqual(testClass.middleEndianTime, '10:45 AM');

		set(testClass, 'date', addHoursToDate(testClass.date, 2));
		assert.strictEqual(testClass.middleEndianTime, '12:45 PM');

		set(testClass, 'date', undefined);
		assert.strictEqual(testClass.middleEndianTime, 'None');
	});


	test('@middleEndianDateTimeString()', function(assert) {
		const testClass = new DateTestClass();
		assert.strictEqual(testClass.middleEndianDateTime, '01/01/1986 10:45 AM');

		set(testClass, 'date', addHoursToDate(testClass.date, 26));
		assert.strictEqual(testClass.middleEndianDateTime, '01/02/1986 12:45 PM');

		set(testClass, 'date', undefined);
		assert.strictEqual(testClass.middleEndianDateTime, 'None');
	});


	test('@bigEndianDateString()', function(assert) {
		const testClass = new DateTestClass();
		assert.strictEqual(testClass.bigEndianDate, '1986-01-01');

		set(testClass, 'date', addHoursToDate(testClass.date, 24));
		assert.strictEqual(testClass.bigEndianDate, '1986-01-02');

		set(testClass, 'date', undefined);
		assert.strictEqual(testClass.bigEndianDate, 'None');
	});
});
