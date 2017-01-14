import angular from 'angular';
import AddAdvertisementConfig from './add-advertisement.config';
import AddAdvertisementCtrl from './add-advertisement.controller';

let addAdvertisementModule = angular.module('app.add-advertisement', []);
addAdvertisementModule.config(AddAdvertisementConfig);
addAdvertisementModule.controller('AddAdvertisementCtrl', AddAdvertisementCtrl);

export default addAdvertisementModule;