'use strict';

import ClockView from './clockView';
import ViewPhoto from './ViewPhoto';

//apiの開始
const viewPhoto = new ViewPhoto(document.querySelectorAll('.js-main')[0]);
viewPhoto.start();

//clockの開始
const view = new ClockView(document.querySelectorAll('.js-clock')[0]);
view.start();

