class HomeCtrl {
  constructor(Advertisement) {
    'ngInject';

    this.advertisements = Advertisement.getAll();
  }


}

export default HomeCtrl;