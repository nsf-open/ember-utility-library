import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { toUSDFormat, fromUSDFormat } from '@nsf/currency-utils';


module('Unit | Utility | formatters', function(hooks) {
	setupTest(hooks);


	test('toUSD()', function(assert) {
		assert.strictEqual(toUSDFormat(null), null);
		assert.strictEqual(toUSDFormat('ab'), 'ab');
		assert.strictEqual(toUSDFormat(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);

		assert.strictEqual(toUSDFormat(123), '$123');
		assert.strictEqual(toUSDFormat(123, true), '$123.00');
		assert.strictEqual(toUSDFormat(123, { cents: false }), '$123');
		assert.strictEqual(toUSDFormat(123, { cents: true }), '$123.00');
		assert.strictEqual(toUSDFormat(123, { currencySymbol: true }), '$123');
		assert.strictEqual(toUSDFormat(123, { currencySymbol: false }), '123');
		assert.strictEqual(toUSDFormat(123, { currencySymbol: false, cents: true }), '123.00');

		assert.strictEqual(toUSDFormat(-123), '-$123');
		assert.strictEqual(toUSDFormat(-123, true), '-$123.00');
		assert.strictEqual(toUSDFormat(-123, { accountingFormat: true }), '($123)');
		assert.strictEqual(toUSDFormat(-123, { accountingFormat: true, currencySymbol: false }), '(123)');
		assert.strictEqual(toUSDFormat(-123, { accountingFormat: true, currencySymbol: false, cents: true }), '(123.00)');
	});


	test('fromUSD()', function(assert) {
		assert.ok(isNaN(fromUSDFormat(null)));
		assert.strictEqual(fromUSDFormat(123), 123);
		assert.strictEqual(fromUSDFormat(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);

		assert.strictEqual(fromUSDFormat('$123'), 123);
		assert.strictEqual(fromUSDFormat('$123.00'), 123);
		assert.strictEqual(fromUSDFormat('$123.55'), 123.55);
		assert.strictEqual(fromUSDFormat('  $123.55'), 123.55);
		assert.strictEqual(fromUSDFormat('-$123.55'), -123.55);
		assert.strictEqual(fromUSDFormat('($123.55)'), -123.55);
	});
});
