import Advertisements from '../mockupdata/mock-advertisements.js';

export default class Advertisement {

	constructor() {
		'ngInject';
	}

	getAll() {
		return Advertisements;
	}

}