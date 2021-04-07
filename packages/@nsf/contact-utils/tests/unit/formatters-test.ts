import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { toDomesticUSPhoneNumber } from '@nsf/contact-utils';


module('Unit | Utility | formatters', function(hooks) {
	setupTest(hooks);


	test('toDomesticUSPhoneNumber()', function(assert) {
		assert.strictEqual(toDomesticUSPhoneNumber('1234567890'), '(123) 456-7890');
		assert.strictEqual(toDomesticUSPhoneNumber('123-456-7890'), '(123) 456-7890');
		assert.strictEqual(toDomesticUSPhoneNumber(1234567890), '(123) 456-7890');

		assert.strictEqual(toDomesticUSPhoneNumber(null, 'N/A'), 'N/A');
		assert.strictEqual(toDomesticUSPhoneNumber('1234', 'N/A'), 'N/A');
		assert.strictEqual(toDomesticUSPhoneNumber(1234, 'N/A'), 'N/A');
	});
});
