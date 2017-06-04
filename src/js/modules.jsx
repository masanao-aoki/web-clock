'use strict';

import ClockView from './clockView';
import Flickr from './flickr';

//apiの開始
const flickr = new Flickr();
flickr.start();

//clockの開始
const view = new ClockView(document.querySelectorAll('.js-clock')[0]);
view.start();

