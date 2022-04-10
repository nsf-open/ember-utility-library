import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { PARSE_FORMATS } from '@nsf-open/ember-datetime-utils';


module('Unit | Utility | constants', function(hooks) {
	setupTest(hooks);

	test('it has the expected order of parsing masks', function(assert) {
		assert.deepEqual(PARSE_FORMATS, [
      'YYYY-MM-DD',
      'MM/DD/YYYY',
      'MM/DD/YYYY h:mm A',
      'MM/DD/YYYY HH:mm:ss',
      'MM/DD/YYYY h:mm A ZZ',
      'YYYY-MM-DD[T]HH:mm:ss',
      'YYYY-MM-DD[T]HH:mm:ssZZ',
      'YYYY-MM-DD[T]HH:mm:ss.SSS',
      'YYYY-MM-DD[T]HH:mm:ss.SSSZZ',
		]);
	});
});
