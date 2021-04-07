import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { set, setProperties } from '@ember/object';
import {
	formatFirstNameFirst,
	formatLastNameFirst,
} from '@nsf/username-helpers';


module('Unit | Utility | computed-macros', function(hooks) {
	setupTest(hooks);


	class NameTestClass {
		public id?: string;
		public firstName?: string;
		public middleName?: string;
		public lastName?: string;

		public updateName(first?: string, middle?: string, last?: string) {
			setProperties(this, {
				firstName:  first,
				middleName: middle,
				lastName:   last,
			});
		}


		@formatFirstNameFirst('firstName', 'middleName', 'lastName')
		public firstNameFirst!: string;

		@formatFirstNameFirst('firstName', 'middleName', 'lastName', { defaultText: 'N/A' })
		public firstNameFirstWithDefault!: string;

		@formatFirstNameFirst('firstName', 'middleName', 'lastName', { fallbackKey: undefined, defaultText: 'None' })
		public firstNameFirstNoFallback!: string;


		@formatLastNameFirst('firstName', 'middleName', 'lastName')
		public lastNameFirst!: string;

		@formatLastNameFirst('firstName', 'middleName', 'lastName', { defaultText: 'N/A' })
		public lastNameFirstWithDefault!: string;

		@formatLastNameFirst('firstName', 'middleName', 'lastName', { fallbackKey: undefined, defaultText: 'None' })
		public lastNameFirstNoFallback!: string;
	}


	test('@formatFirstNameFirst()', function(assert) {
		const testClass = new NameTestClass();

		assert.strictEqual(testClass.firstNameFirst, '');
		assert.strictEqual(testClass.firstNameFirstWithDefault, 'N/A');
		assert.strictEqual(testClass.firstNameFirstNoFallback, 'None');

		set(testClass, 'id', 'JDOE');
		assert.strictEqual(testClass.firstNameFirst, 'JDOE');
		assert.strictEqual(testClass.firstNameFirstWithDefault, 'JDOE');
		assert.strictEqual(testClass.firstNameFirstNoFallback, 'None');

		testClass.updateName('John', 'Quincy', 'Doe');
		assert.strictEqual(testClass.firstNameFirst, 'John Q. Doe');

		testClass.updateName(undefined, 'Quincy', 'Doe');
		assert.strictEqual(testClass.firstNameFirst, 'Q. Doe');

		testClass.updateName('John', undefined, 'Doe');
		assert.strictEqual(testClass.firstNameFirst, 'John Doe');

		testClass.updateName('John', 'Quincy', undefined);
		assert.strictEqual(testClass.firstNameFirst, 'John Q.');

		testClass.updateName(undefined, undefined, 'Doe');
		assert.strictEqual(testClass.firstNameFirst, 'Doe');

		testClass.updateName('John', undefined, undefined);
		assert.strictEqual(testClass.firstNameFirst, 'John');
	});


	test('@formatLastNameFirst()', function(assert) {
		const testClass = new NameTestClass();

		assert.strictEqual(testClass.lastNameFirst, '');
		assert.strictEqual(testClass.lastNameFirstWithDefault, 'N/A');
		assert.strictEqual(testClass.lastNameFirstNoFallback, 'None');

		set(testClass, 'id', 'JDOE');
		assert.strictEqual(testClass.lastNameFirst, 'JDOE');
		assert.strictEqual(testClass.lastNameFirstWithDefault, 'JDOE');
		assert.strictEqual(testClass.lastNameFirstNoFallback, 'None');

		testClass.updateName('John', 'Quincy', 'Doe');
		assert.strictEqual(testClass.lastNameFirst, 'Doe, John Q.');

		testClass.updateName(undefined, 'Quincy', 'Doe');
		assert.strictEqual(testClass.lastNameFirst, 'Doe, Q.');

		testClass.updateName('John', undefined, 'Doe');
		assert.strictEqual(testClass.lastNameFirst, 'Doe, John');

		testClass.updateName('John', 'Quincy', undefined);
		assert.strictEqual(testClass.lastNameFirst, 'John Q.');

		testClass.updateName(undefined, undefined, 'Doe');
		assert.strictEqual(testClass.lastNameFirst, 'Doe');

		testClass.updateName('John', undefined, undefined);
		assert.strictEqual(testClass.lastNameFirst, 'John');
	});
});
