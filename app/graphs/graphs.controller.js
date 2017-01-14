class GraphsCtrl {
  constructor(Advertisement) {
    'ngInject';

    this.advertisements = Advertisement.getAll();

    this.instrument_labels = ["Guitar", "Bass", "Keyboard", "Drums"];
  	this.instrument_data = [
		Advertisement.getInstrumentCount('Guitar'), 
		Advertisement.getInstrumentCount('Bass'), 
		Advertisement.getInstrumentCount('Keyboard'),
		Advertisement.getInstrumentCount('Drums')
	];

    this.city_labels = ["Madrid", "Barcelona", "Málaga"];
  	this.city_data = [
		Advertisement.getCityCount('Madrid'), 
		Advertisement.getCityCount('Barcelona'), 
		Advertisement.getCityCount('Málaga')
	];

	this.genre_labels = ["Hard Rock", "Funk", "Prog Rock", "Metal", "Blues", "Jazz"];
	this.genre_data = [
		Advertisement.getGenreCount('Hard Rock'), 
		Advertisement.getGenreCount('Funk'), 
		Advertisement.getGenreCount('Prog Rock'),
		Advertisement.getGenreCount('Metal'),
		Advertisement.getGenreCount('Blues'),
		Advertisement.getGenreCount('Jazz')
	];
  }


}

export default GraphsCtrl;