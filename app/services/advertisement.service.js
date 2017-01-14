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

	getInstrumentDataCount() {
		var data = [];
		var labels = this.getInstrumentLabels();

		for(var i=0; i<labels.length; i++) {
			var counter = 0;
			for(var j=0; j<Advertisements.length; j++) {
				if(Advertisements[j].instrument == labels[i]) {
					counter++;
				}
			}
			data.push(counter);
		}
		return data;
	}

	getCityDataCount() {
		var data = [];
		var labels = this.getCityLabels();

		for(var i=0; i<labels.length; i++) {
			var counter = 0;
			for(var j=0; j<Advertisements.length; j++) {
				if(Advertisements[j].city == labels[i]) {
					counter++;
				}
			}
			data.push(counter);
		}
		return data;
	}

	getGenreDataCount() {
		var data = [];
		var labels = this.getGenreLabels();

		for(var i=0; i<labels.length; i++) {
			var counter = 0;
			for(var j=0; j<Advertisements.length; j++) {
				if(Advertisements[j].genre == labels[i]) {
					counter++;
				}
			}
			data.push(counter);
		}
		return data;
	}

}