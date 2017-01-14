function AddAdvertisementConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.add-advertisement', {
    url: '/add-advertisement',
    controller: 'AddAdvertisementCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'add-advertisement/add-advertisement.html',
    title: 'AddAdvertisement',
  });

};

export default AddAdvertisementConfig;
