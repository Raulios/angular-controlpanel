class AddAdModalCtrl {
	constructor(Advertisement) {
		'ngInject';

		this._Advertisement = Advertisement;
	}

	submitForm() {
		this.errors = this._Advertisement.createNewAdvertisement(this.advertisement);

		if(this.errors.length == 0) {
			this.dismiss();
		}
	}
}

let AddAdModal = {
	bindings: {
		resolve: '<',
		close: '&',
		dismiss: '&'
	},
	controller: AddAdModalCtrl,
	templateUrl: 'components/add-ad-modal.html'
};

export default AddAdModal;