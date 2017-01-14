import Advertisements from '../mockupdata/mock-advertisements.js';

export default class Advertisement {

	constructor() {
		'ngInject';
	}

	getAll() {
		return Advertisements;
	}

	getInstrumentCount(instrument) {
		var counter = 0;
		for(let i=0; i<Advertisements.length; i++) {
			if(Advertisements[i].instrument == instrument) {
				counter++;
			}
		}
		return counter;
	}

	getCityCount(city) {
		var counter = 0;
		for(let i=0; i<Advertisements.length; i++) {
			if(Advertisements[i].city == city) {
				counter++;
			}
		}
		return counter;
	}

	getGenreCount(genre) {
		var counter = 0;
		for(let i=0; i<Advertisements.length; i++) {
			if(Advertisements[i].genre == genre) {
				counter++;
			}
		}
		return counter;
	}

}