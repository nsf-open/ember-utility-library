import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { escapeRegExp } from '@nsf-open/ember-general-utils';


module('Unit | Utility | regex', function(hooks) {
	setupTest(hooks);


	test('escapeRegExp()', function(assert) {
		assert.strictEqual(escapeRegExp(null), null);
		assert.strictEqual(escapeRegExp('.*+?^${}()|[]\\'), '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\')
	});
});
