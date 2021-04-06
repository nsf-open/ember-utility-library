import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { PARSE_FORMATS } from '@nsf/datetime-helpers';


module('Unit | Utility | constants', function(hooks) {
	setupTest(hooks);

	test('it has the expected order of parsing masks', function(assert) {
		assert.deepEqual(PARSE_FORMATS, [
			'YYYY-MM-DD',
			'MM/DD/YYYY',
			'YYYY-MM-DD[T]HH:mm:ss.SSS',
			'MM/DD/YYYY h:mm A',
			'YYYY-MM-DD[T]HH:mm:ss.SSS ZZ',
			'MM/DD/YYYY h:mm A ZZ',
		]);
	});
});
