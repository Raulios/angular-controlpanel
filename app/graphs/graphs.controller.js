class GraphsCtrl {
  constructor(Advertisement) {
    'ngInject';

    this.advertisements = Advertisement.getAll();

    this.instrument_labels = Advertisement.getInstrumentLabels();
  	this.instrument_data = [
		Advertisement.getInstrumentCount('Guitar'), 
		Advertisement.getInstrumentCount('Bass'), 
		Advertisement.getInstrumentCount('Keyboard'),
		Advertisement.getInstrumentCount('Drums')
	];

    this.city_labels = Advertisement.getCityLabels();
  	this.city_data = [
		Advertisement.getCityCount('Madrid'), 
		Advertisement.getCityCount('Barcelona'), 
		Advertisement.getCityCount('Málaga')
	];

	this.genre_labels = Advertisement.getGenreLabels();
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