import Advertisements from '../mockupdata/mock-advertisements.js';

export default class Advertisement {

	constructor() {
		'ngInject';
	}

	getAll() {
		return Advertisements;
	}

	getInstrumentLabels() {
		var labels = [];
		for(let i=0; i<Advertisements.length; i++) {
			if(labels.indexOf(Advertisements[i].instrument) == -1) {
				labels.push(Advertisements[i].instrument);
			}
		}

		return labels;
	}

	getCityLabels() {
		var labels = [];
		for(let i=0; i<Advertisements.length; i++) {
			if(labels.indexOf(Advertisements[i].city) == -1) {
				labels.push(Advertisements[i].city);
			}
		}

		return labels;
	}

	getGenreLabels() {
		var labels = [];
		for(let i=0; i<Advertisements.length; i++) {
			if(labels.indexOf(Advertisements[i].genre) == -1) {
				labels.push(Advertisements[i].genre);
			}
		}

		return labels;
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