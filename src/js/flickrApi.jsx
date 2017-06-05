'use strict';

import request from 'superagent';
import moment from 'moment';

export default class FlickrApi {
	constructor(){
		this.url = 'https://api.flickr.com/services/rest/'
		this.timeStatus = this.timeStatusCheck(moment().format('HH'));
		this.getParam = {
			method: 'flickr.photos.search',
			api_key: '0005be995e8a3c3a4db367ebeb364603',
			tags: this.timeStatus,
			per_page: 6,
			page: 1,
			format: 'json',
			nojsoncallback: 1
		}
	}

	timeStatusCheck(hour) {
		let timeStatus = '';
		if( hour >= 16 && hour <= 18) {
			timeStatus = 'evening';
		} else if (hour >= 12 && hour <= 15 ) {
			timeStatus = 'noon';
		} else if (hour >= 7 && hour <= 11 ) {
			timeStatus = 'morning';
		} else {
			timeStatus = 'night';
		}
		return timeStatus
	}

	start(complate) {
		request
			.get(this.url)
			.query(this.getParam)
			.end((err, res) => {
				const randNum = Math.floor(Math.random() * (5 - 0));
				this.photoArray = res.body.photos.photo[randNum];
				complate();
			});
	}

}
