/* eslint-disable ember/no-get */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { guidFor } from '@ember/object/internals';


module('Integration | Helpers', function(hooks) {
	setupRenderingTest(hooks);


	function getText(container: Element | Document) {
		return container.querySelector('[data-test]')?.textContent;
	}


	test('{{is-primitive}}', async function(assert) {
		this.set('testValue', 0);
		await render(hbs`<span data-test>{{if (is-primitive this.testValue) "TRUE" "FALSE"}}</span>`);
		assert.strictEqual(getText(this.element), 'TRUE');

		this.set('testValue', "0");
		assert.strictEqual(getText(this.element), 'TRUE');

		this.set('testValue', true);
		assert.strictEqual(getText(this.element), 'TRUE');

		this.set('testValue', {});
		assert.strictEqual(getText(this.element), 'FALSE');

		this.set('testValue', []);
		assert.strictEqual(getText(this.element), 'FALSE');
	});


	test('{{guid-for}}', async function(assert) {
		this.set('testValue', {});
		this.set('testSuffix', undefined);

		await render(hbs`<span data-test>{{guid-for this.testValue this.testSuffix}}</span>`);
		assert.strictEqual(getText(this.element), guidFor(this.get('testValue')));

		this.set('testSuffix', 'foobar');
		assert.strictEqual(getText(this.element), `${guidFor(this.get('testValue'))}-foobar`);
	});
});
