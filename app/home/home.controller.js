class HomeCtrl {
  constructor(Advertisement, $uibModal) {
    'ngInject';

    this._$uibModal = $uibModal;

    this.advertisements = Advertisement.getAll();
    this._Advertisement = Advertisement;
  }

  openAddAdModal() {
  	this._$uibModal.open({
  		animation: true,
  		component: 'addAdModal',
  	});
  }

  openEditAdModal(ad) {
    this._$uibModal.open({
      animation: true,
      component: 'editAdModal',
      resolve: {
        ad: function () {
          return ad;
        }
      }
    });
  }

  deleteAdvertisement(ad) {
    this._Advertisement.deleteAdvertisement(ad);
  }
}

export default HomeCtrl;