import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { trim, truncate, humanize } from '@nsf/general-utils';


module('Unit | Utility | strings', function(hooks) {
	setupTest(hooks);


	test('trim()', function(assert) {
		assert.strictEqual(trim(null), '');
		assert.strictEqual(trim(' foo '), 'foo');
	});


	test('truncate()', function(assert) {
		// @ts-expect-error
		assert.throws(() => truncate(null));

		assert.strictEqual(
			truncate('This is a short string.', 40),
			'This is a short string.',
			'it ignores strings whose length is less than the limit'
		);

		assert.strictEqual(
			truncate('Sally sells sea shells down by the sea shore.', 40),
			'Sally sells sea shells down by the sea ...',
			'it walks back to the last white space character'
		);

		assert.strictEqual(
			truncate('Sally is\'a selling her sea shells by the sea shore.', 40),
			'Sally is\'a selling her sea shells by the ...',
			'it checks for the limit being the last character of a word'
		);

		assert.strictEqual(
			truncate('SallySellsSeaShellsDownByTheSeaShore.SheSureLikesSeaShells.', 40),
			'SallySellsSeaShellsDownByTheSeaShore.She ...',
			'it splits a very long word right at the limit'
		);

		assert.strictEqual(
			truncate('Sally sells sea shells down by the sea shore.', 40, ' ~~~'),
			'Sally sells sea shells down by the sea ~~~',
			'it accepts a custom postfix value'
		);
	});


	test('humanize()', function(assert) {
		// @ts-expect-error
		assert.throws(() => humanize(null));

		assert.strictEqual(humanize('fooBarBaz'),   'Foo bar baz');
		assert.strictEqual(humanize('foo_Bar_Baz'), 'Foo bar baz');
		assert.strictEqual(humanize('foo_bar_baz'), 'Foo bar baz');
		assert.strictEqual(humanize('foo-Bar-Baz'), 'Foo bar baz');
		assert.strictEqual(humanize('foo-bar-baz'), 'Foo bar baz');
		assert.strictEqual(humanize('foo Bar Baz'), 'Foo bar baz');
		assert.strictEqual(humanize('foo bar baz'), 'Foo bar baz');

		assert.strictEqual(humanize('fooBarBaz',   true), 'Foo Bar Baz');
		assert.strictEqual(humanize('foo_Bar_Baz', true), 'Foo Bar Baz');
		assert.strictEqual(humanize('foo_bar_baz', true), 'Foo Bar Baz');
		assert.strictEqual(humanize('foo-Bar-Baz', true), 'Foo Bar Baz');
		assert.strictEqual(humanize('foo-bar-baz', true), 'Foo Bar Baz');
		assert.strictEqual(humanize('foo Bar Baz', true), 'Foo Bar Baz');
		assert.strictEqual(humanize('foo bar baz', true), 'Foo Bar Baz');
	});
});
