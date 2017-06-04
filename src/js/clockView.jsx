'use strict';

import Clock from './clock';

export default class View {
	constructor(el) {
		this.clock = new Clock;
		this.clockEl = el;
	}

	render () {
		//表示の処理
		this.clockEl.innerHTML = this.clock.time;
	}

	start () {
		this.clock.start(
			() => this.render()
		);
	}
}