class EditAdModalCtrl {
	constructor(Advertisement) {
		'ngInject';

		this._Advertisement = Advertisement;
	}

	$onInit() {
		this.advertisement = this.resolve.ad;
		console.log(this.resolve.ad);
	}

	submitForm() {
		this.errors = this._Advertisement.editAdvertisement(this.advertisement);

		console.log(this.errors);

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