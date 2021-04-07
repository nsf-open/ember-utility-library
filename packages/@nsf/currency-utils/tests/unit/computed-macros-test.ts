import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { set } from '@ember/object';
import { toUSD, fromUSD } from '@nsf/currency-utils';


module('Unit | Utility | computed-macros', function(hooks) {
	setupTest(hooks);


	test('@toUSD()', function(assert) {
		class CurrencyTestClass {
			public value?: number;

			@toUSD('value')
			public formattedValue!: string;

			@toUSD('value', true)
			public formattedDouble!: string;
		}

		const testClass = new CurrencyTestClass();
		assert.strictEqual(testClass.formattedValue, undefined);
		assert.strictEqual(testClass.formattedDouble, undefined);

		set(testClass, 'value', 123);
		assert.strictEqual(testClass.formattedValue, '$123');
		assert.strictEqual(testClass.formattedDouble, '$123.00');
	});


	test('@fromUSD()', function(assert) {
		class CurrencyTestClass {
			public value?: string;

			@fromUSD('value')
			public formattedValue!: number;
		}

		const testClass = new CurrencyTestClass();
		assert.ok(isNaN(testClass.formattedValue));

		set(testClass, 'value', '$123');
		assert.strictEqual(testClass.formattedValue, 123);

		set(testClass, 'value', '$123.55');
		assert.strictEqual(testClass.formattedValue, 123.55);

		set(testClass, 'value', '($123)');
		assert.strictEqual(testClass.formattedValue, -123);
	});
});
