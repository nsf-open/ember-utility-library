'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
	return Promise.all([
		getChannelURL('release')
	]).then((urls) => {
		return {
			useYarn: true,

			scenarios: [
				{
					name: 'ember-lts-3.4',
					npm: {
						devDependencies: {
							'ember-source': '~3.4.0'
						}
					}
				},
				{
					name: 'ember-release',
					npm: {
						devDependencies: {
							'ember-source': urls[0]
						}
					}
				},
				{
					name: 'ember-default',
					npm: {
						devDependencies: {}
					}
				},
			]
		};
	});
};
