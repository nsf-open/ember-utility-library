import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { set } from '@ember/object';
import { domesticUSPhoneNumber } from '@nsf/contact-utils';


module('Unit | Utility | computed-macros', function(hooks) {
	setupTest(hooks);


	test('@domesticUSPhoneNumber()', function(assert) {
		class PhoneTestClass {
			public phone?: string | number;

			@domesticUSPhoneNumber('phone')
			public formattedPhone!: string;
		}

		const testClass = new PhoneTestClass();
		assert.strictEqual(testClass.formattedPhone, 'None');

		set(testClass, 'phone', '1234567890');
		assert.strictEqual(testClass.formattedPhone, '(123) 456-7890');

		set(testClass, 'phone', 1234567890);
		assert.strictEqual(testClass.formattedPhone, '(123) 456-7890');

		set(testClass, 'phone', '1234');
		assert.strictEqual(testClass.formattedPhone, 'None');
	});
});
