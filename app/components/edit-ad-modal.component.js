class EditAdModalCtrl {
	constructor(Advertisement) {
		'ngInject';

		this._Advertisement = Advertisement;
	}

	$onInit() {
		this.advertisement = this.resolve.ad;
	}

	submitForm() {
		this.errors = this._Advertisement.editAdvertisement(this.advertisement);

		if(this.errors.length == 0) {
			this.dismiss();
		}
	}
}

let EditAdModal = {
	bindings: {
		resolve: '<',
		close: '&',
		dismiss: '&'
	},
	controller: EditAdModalCtrl,
	templateUrl: 'components/edit-ad-modal.html'
};

export default EditAdModal;