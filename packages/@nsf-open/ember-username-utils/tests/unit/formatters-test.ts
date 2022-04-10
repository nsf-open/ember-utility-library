import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import {
	toFirstNameFirstFormat,
	toLastNameFirstFormat,
} from '@nsf-open/ember-username-utils';


module('Unit | Utility | formatters', function(hooks) {
	setupTest(hooks);


	test('toFirstNameFirstFormat()', function(assert) {
		assert.equal(toFirstNameFirstFormat(undefined, undefined, undefined), '');

		assert.equal(toFirstNameFirstFormat('John', 'Q', 'Doe'), 'John Q. Doe');
		assert.equal(toFirstNameFirstFormat(undefined, 'Q', 'Doe'), 'Q. Doe');
		assert.equal(toFirstNameFirstFormat('John', undefined, 'Doe'), 'John Doe');
		assert.equal(toFirstNameFirstFormat('John', 'Q', undefined), 'John Q.');
		assert.equal(toFirstNameFirstFormat(undefined, undefined, 'Doe'), 'Doe');
		assert.equal(toFirstNameFirstFormat('John', undefined, undefined), 'John');

		assert.equal(toFirstNameFirstFormat('John', 'Quincy', 'Doe'), 'John Q. Doe');
		assert.equal(toFirstNameFirstFormat(undefined, 'Quincy', 'Doe'), 'Q. Doe');
		assert.equal(toFirstNameFirstFormat('John', 'Quincy', undefined), 'John Q.');

		assert.equal(toFirstNameFirstFormat('John', 'Quincy', 'Doe', { noMiddleInitialPunctuation: true }), 'John Q Doe');
		assert.equal(toFirstNameFirstFormat('John', 'Quincy', 'Doe', { noMiddleInitial: true }), 'John Doe');

		assert.equal(toFirstNameFirstFormat(undefined, undefined, undefined, { defaultText: 'Hello World' }), 'Hello World');
	});


	test('toLastNameFirstFormat()', function(assert) {
		assert.equal(toLastNameFirstFormat(), '');

		assert.equal(toLastNameFirstFormat('John', 'Q', 'Doe'), 'Doe, John Q.');
		assert.equal(toLastNameFirstFormat(undefined, 'Q', 'Doe'), 'Doe, Q.');
		assert.equal(toLastNameFirstFormat('John', undefined, 'Doe'), 'Doe, John');
		assert.equal(toLastNameFirstFormat('John', 'Q', undefined), 'John Q.');
		assert.equal(toLastNameFirstFormat(undefined, undefined, 'Doe'), 'Doe');
		assert.equal(toLastNameFirstFormat('John', undefined, undefined), 'John');

		assert.equal(toLastNameFirstFormat('John', 'Quincy', 'Doe'), 'Doe, John Q.');
		assert.equal(toLastNameFirstFormat(undefined, 'Quincy', 'Doe'), 'Doe, Q.');
		assert.equal(toLastNameFirstFormat('John', 'Quincy', undefined), 'John Q.');

		assert.equal(toLastNameFirstFormat('John', 'Quincy', 'Doe', { noMiddleInitialPunctuation: true }), 'Doe, John Q');
		assert.equal(toLastNameFirstFormat('John', 'Quincy', 'Doe', { noMiddleInitial: true }), 'Doe, John');

		assert.equal(toLastNameFirstFormat(undefined, undefined, undefined, { defaultText: 'Hello World' }), 'Hello World');
	});
});
