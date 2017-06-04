'use strict';

import moment from 'moment';

export default class Clock {
	constructor () {
		this.time = moment().format("HH:mm:ss");
	}

	start(complate) {
		setInterval(
			() => {
				this.time = moment().format("HH:mm:ss");
				complate();
			}, 1000);
	}

}

