'use strict';

module.exports = {
	name: require('./package').name,

	included() {
		this._super.included.apply(this, arguments);
		this.import('node_modules/moment/min/moment.min.js', {
			using: [{ transformation: 'amd', as: 'moment' }],
		});
	}
};
