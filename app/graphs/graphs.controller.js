class GraphsCtrl {
  constructor(Advertisement) {
    'ngInject';

    this.advertisements = Advertisement.getAll();
  }


}

export default GraphsCtrl;