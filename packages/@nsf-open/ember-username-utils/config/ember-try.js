'use strict';
const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function() {
	return {
		useYarn: true,
		command: 'npm run test:ember',

		scenarios: [
			{
				name: 'ember-lts-3.16',
				npm: {
					devDependencies: {
						'ember-source': '~3.16'
					}
				}
			},
			{
				name: 'ember-lts-3.28',
				npm: {
					devDependencies: {
						'ember-source': '~3.28'
					}
				}
			},
			{
				name: 'ember-release',
				env: {
					COVERAGE: true,
				},
				npm: {
					devDependencies: {
						'ember-source': await getChannelURL('release'),
					}
				}
			},
			{
				name: 'ember-default',
				npm: {
					devDependencies: {}
				}
			},
			embroiderSafe(),
			embroiderOptimized(),
		]
	};
};
