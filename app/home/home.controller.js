class HomeCtrl {
  constructor(Advertisement, $uibModal) {
    'ngInject';

    this._$uibModal = $uibModal;

    this.advertisements = Advertisement.getAll();
  }

  openAddAdModal() {
  	this._$uibModal.open({
  		animation: true,
  		component: 'addAdModal',
  	});
  }
}

export default HomeCtrl;