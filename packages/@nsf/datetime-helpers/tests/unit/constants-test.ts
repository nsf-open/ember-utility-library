import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { PARSE_FORMATS } from '@nsf/datetime-helpers';


module('Unit | Utility | constants', function(hooks) {
	setupTest(hooks);

	test('it has the expected order of parsing masks', function(assert) {
		assert.deepEqual(PARSE_FORMATS, [
			'YYYY-MM-DD',
			'MM/DD/YYYY',
			'YYYY-MM-DDTHH:mm:ss.SSS',
			'YYYY-MM-DDTHH:mm:ss',
			'MM/DD/YYYY h:mm A',
			'MM/DD/YYYY h:mm A ZZ',
			'YYYY-MM-DDTHH:mm:ss.SSSZZ',
			'YYYY-MM-DDTHH:mm:ssZZ',
		]);
	});
});
