'use strict';

import FlickrApi from './flickrApi';

export default class ViewPhoto {
	constructor(el) {
		this.flickrApi = new FlickrApi;
		this.flickrEl = el;
	}

	renderPhoto() {
		const {
			farm,
			id,
			secret,
			server
		} = this.flickrApi.photoArray;

		const photoUrl = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;
		this.flickrEl.style.backgroundImage = `url(${photoUrl})`;

		const img = new Image();
		img.src = photoUrl;
		img.onload = () => {
			this.flickrEl.classList.add('is-active',`is-${this.flickrApi.timeStatus}`);
		};
	}

	start() {
		this.flickrApi.start(
			() => this.renderPhoto()
		);
	}


}
