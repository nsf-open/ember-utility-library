import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { toUSD, fromUSD } from '@nsf/currency-utils';


module('Unit | Utility | formatters', function(hooks) {
	setupTest(hooks);


	test('toUSD()', function(assert) {
		assert.strictEqual(toUSD(null), null);
		assert.strictEqual(toUSD('ab'), 'ab');
		assert.strictEqual(toUSD(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);

		assert.strictEqual(toUSD(123), '$123');
		assert.strictEqual(toUSD(123, true), '$123.00');
		assert.strictEqual(toUSD(123, { cents: false }), '$123');
		assert.strictEqual(toUSD(123, { cents: true }), '$123.00');
		assert.strictEqual(toUSD(123, { currencySymbol: true }), '$123');
		assert.strictEqual(toUSD(123, { currencySymbol: false }), '123');
		assert.strictEqual(toUSD(123, { currencySymbol: false, cents: true }), '123.00');

		assert.strictEqual(toUSD(-123), '-$123');
		assert.strictEqual(toUSD(-123, true), '-$123.00');
		assert.strictEqual(toUSD(-123, { accountingFormat: true }), '($123)');
		assert.strictEqual(toUSD(-123, { accountingFormat: true, currencySymbol: false }), '(123)');
		assert.strictEqual(toUSD(-123, { accountingFormat: true, currencySymbol: false, cents: true }), '(123.00)');
	});


	test('fromUSD()', function(assert) {
		assert.ok(isNaN(fromUSD(null)));
		assert.strictEqual(fromUSD(123), 123);
		assert.strictEqual(fromUSD(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);

		assert.strictEqual(fromUSD('$123'), 123);
		assert.strictEqual(fromUSD('$123.00'), 123);
		assert.strictEqual(fromUSD('$123.55'), 123.55);
		assert.strictEqual(fromUSD('  $123.55'), 123.55);
		assert.strictEqual(fromUSD('-$123.55'), -123.55);
		assert.strictEqual(fromUSD('($123.55)'), -123.55);
	});
});
