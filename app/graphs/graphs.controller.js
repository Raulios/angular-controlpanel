class GraphsCtrl {
  constructor(Advertisement) {
    'ngInject';

    this.advertisements = Advertisement.getAll();

    this.instrument_labels = Advertisement.getInstrumentLabels();
  	this.instrument_data = Advertisement.getInstrumentDataCount();

    this.city_labels = Advertisement.getCityLabels();
  	this.city_data = Advertisement.getCityDataCount();

	this.genre_labels = Advertisement.getGenreLabels();
	this.genre_data = Advertisement.getGenreDataCount();
  }
}

export default GraphsCtrl;